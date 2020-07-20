import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase';

export const userContext = createContext();

export const ContextProvider = ({ children }) => {

    const history = useHistory();
    const [user, setUser] = useState()

    const createNewUser = (email, password, repassword) => {
        if (password !== repassword) {
            console.log('zuv bich')
        }
        console.log(email, password)
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                db.collection("Users")
                    .doc(userCredential.user.uid)
                    .set({
                        email: email,
                        password: password,
                        username: email,
                    }).then(history.push('/'))
                    .catch(error => {
                        console.log(error.message);
                        alert(error.message);
                    });
            })
    }


    return (
        <userContext.Provider
            value={{ user, createNewUser }}
        >
            {children}
        </userContext.Provider>
    )
}