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
            .signInWithEmailAndPassword(email, password).then(() => { history.push('/'); console.log('userOrson') })
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

    const createNewUrl = (givenUrl) => {
        const randomNumber = Math.floor(Math.random() * 1000000).toString();
        console.log(randomNumber)
        db.collection("newUrls")
            .doc(randomNumber)
            .set({
                givenUrl: givenUrl,
                tinyUrl: `https://everytest-6b105.web.app/${randomNumber}`
            })
            .then(() => {
                // history.push("/");
                auth.onAuthStateChanged((res) => {
                    if (res !== undefined) {
                        const uid = res.uid
                        console.log(user.history)
                        var takeHistory = user.history;
                        takeHistory.push({
                            givenUrl: givenUrl,
                            tinyUrl: `https://everytest-6b105.web.app/${randomNumber}`
                        }
                        )
                        console.log(takeHistory)

                        db.collection('Users').doc(uid).set({
                            history: takeHistory
                        }, { merge: true })
                    }
                })
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    }


    const takeUrl = (number) => {
        console.log(number)
        if (db !== undefined) {
            db.collection('newUrls').doc(number.toString()).get()
                .then((res) => {
                    if (res === undefined) {
                        history.push("/")
                        console.log('ok')
                    } else {
                        console.log(res)
                        window.location.href = res.data().givenUrl;
                    }
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