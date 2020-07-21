<<<<<<< HEAD
import React, { createContext, useState } from 'react'
=======
import React, { createContext, useState, useEffect } from 'react'
>>>>>>> b4056e5f1f291181e8fe0603610d3fcfb0c8da6e
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase';
import { firestore } from 'firebase';

export const userContext = createContext();

export const ContextProvider = ({ children }) => {
<<<<<<< HEAD

    const history = useHistory();
    const [user, setUser] = useState()
=======
    const history = useHistory();

    const [user, setUser] = useState({
        history: "",
        username: "",
    })
    // console.log(user)
    const logOut = () => {
        setUser(undefined);
        history.push('/')
    }

    const loginUser = (email, password) => {
        auth
            .signInWithEmailAndPassword(email, password).then(() => history.push('/'))
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    }
>>>>>>> b4056e5f1f291181e8fe0603610d3fcfb0c8da6e

    const createNewUser = (email, password, repassword) => {
        if (password !== repassword) {
            console.log('zuv bich')
        }
        console.log(email, password)
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
<<<<<<< HEAD
=======
                console.log(userCredential.user.uid);
>>>>>>> b4056e5f1f291181e8fe0603610d3fcfb0c8da6e
                db.collection("Users")
                    .doc(userCredential.user.uid)
                    .set({
                        email: email,
<<<<<<< HEAD
                        password: password,
                        username: email,
                    }).then(history.push('/'))
=======
                        username: email.split('@')[0],
                        password: password,
                    })
                    .then(() => {
                        history.push("/");
                        console.log('ok');
                    })
>>>>>>> b4056e5f1f291181e8fe0603610d3fcfb0c8da6e
                    .catch(error => {
                        console.log(error.message);
                        alert(error.message);
                    });
            })
    }
<<<<<<< HEAD


    return (
        <userContext.Provider
            value={{ user, createNewUser }}
=======
    
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

    const makeId = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    console.log(makeId(6));

    return (
        <userContext.Provider
            value={{ logOut, loginUser, createNewUser, user }}
>>>>>>> b4056e5f1f291181e8fe0603610d3fcfb0c8da6e
        >
            {children}
        </userContext.Provider>
    )
}