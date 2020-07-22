import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase';

export const userContext = createContext();

export const ContextProvider = ({ children }) => {
    const history = useHistory();

    const [user, setUser] = useState({
        history: "",
        username: "",
    })

    const logOut = () => {
        setUser(undefined);
        history.push('/')
    }

    const loginUser = (email, password) => {
        auth
            .signInWithEmailAndPassword(email, password).then(() => { history.push('/'); console.log('ok') })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    }

    const createNewUser = (email, password, repassword) => {
        if (password !== repassword) {
            console.log('zuv bich')
        }
        console.log(email, password)
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential.user.uid);
                db.collection("Users")
                    .doc(userCredential.user.uid)
                    .set({
                        email: email,
                        username: email.split('@')[0],
                        password: password,
                    })
                    .then(() => {
                        history.push("/");
                        console.log('ok');
                    })
                    .catch(error => {
                        console.log(error.message);
                        alert(error.message);
                    });
            })
    }

    const createNewUrl = (originialUrl) => {
        const randomNumber = Math.floor(Math.random() * 1000000).toString();
        console.log(randomNumber)
        db.collection("newUrls")
            .doc(randomNumber)
            .set({
                originialUrl: originialUrl,
            })
            .then(() => {
                history.push("/");
                console.log('ok');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    }

    const takeUrl = (number) => {
        if (db !== undefined) {
            db.collection('newUrls').doc(number.toString()).get()
                .then((res) => {
                    window.location.href = res.data().originialUrl;
                    console.log(res.data().originialUrl)
                })
        }
    }



    useEffect(() => {
        auth.onAuthStateChanged((logged) => {
            if (logged) {
                var uid = logged.uid;
                db.collection('Users').doc(uid).get()
                    .then((data) => {
                        setUser(data.data())
                    })
            } else {
                console.log('alnaa')
            }
        });
    }, [])




    return (
        <userContext.Provider
            value={{ takeUrl, createNewUrl, logOut, loginUser, createNewUser, user }}
        >
            {children}
        </userContext.Provider>
    )
}