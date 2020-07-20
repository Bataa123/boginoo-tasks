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
                        history.push("/");
                        console.log('ok');
                    })
                    .catch(error => {
                        console.log(error.message);
                        alert(error.message);
                    });
            })
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
        >
            {children}
        </userContext.Provider>
    )
}