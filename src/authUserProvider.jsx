import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase';
import { firestore } from 'firebase';

export const userContext = createContext();

export const ContextProvider = ({ children }) => {
    const history = useHistory();

    const [user, setUser] = useState({
        history: "",
        username: "",
    })

    const loginUser = (email, password) => {
        auth
            .signInWithEmailAndPassword(email, password).then(() => history.push('/'))
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    }

    const createNewUser = (email, password) => {
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
                        console.log('ok');
                        history.push("/");
                    })
                    .catch(error => {
                        console.log(error.message);
                        alert(error.message);
                    });
            })
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
                firestore
                    .collection("Users").doc(uid).get()
                    .then((data) => {
                        setUser(data.data())
                    })
            }
        });
    }, [])




    return (
        <userContext.Provider
            value={{ loginUser, createNewUser }}
        >
            {children}
        </userContext.Provider>
    )
}