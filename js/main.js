// Reference -
// import link from Firebase auth service cdn docs - > https: //firebase.google.com/docs/web/alt-setup

import {
    signInWithPopup,
    GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'

import {
    initialize
} from './firebase.js'

import {
    config
} from './config.js'


const loginBtn = document.querySelector("#login-btn");


// Initializing firebase config from config.js
const {
    firebaseAuth
} = initialize(config.firebaseconfig)

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    // Using signin with popup function from firebase console
    signInWithPopup(firebaseAuth, new GoogleAuthProvider()).then(res => {

        // console.log(res.user);

        localStorage.setItem("resume-user", JSON.stringify(res.user));
        location.href = "./pages/home.html"

    }).catch(err => console.log(err))
});



