import React, {createContext, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase';

export const userContext = createContext();

export const ContextProvider = ({children}) => {
    const history = useHistory;

    const [ user, setUser ] = useState({ 
        email: "",
        password: ""
    })

    const createNewUser = () => {
        auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            // authContext.setUser(userCredential);
            db.collection("Users")
                .doc(userCredential.user.uid)
                .set({
                    email: user.email,
                    username: user.username,
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
    

    return (
        <userContext.Provider 
            value={{user, createNewUser}}
        >
            {children}
        </userContext.Provider>
    )
}