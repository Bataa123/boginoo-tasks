import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyCmv4EcMDNDnT2l9JMp4JbTBEP_Yi057t0",
    authDomain: "everytest-6b105.firebaseapp.com",
    databaseURL: "https://everytest-6b105.firebaseio.com",
    projectId: "everytest-6b105",
    storageBucket: "everytest-6b105.appspot.com",
    messagingSenderId: "341553990429",
    appId: "1:341553990429:web:a598eb801e76ec8f932ff4",
    measurementId: "G-QFFKKN90L5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()