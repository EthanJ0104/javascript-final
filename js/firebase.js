const firebaseConfig = {
    apiKey: "AIzaSyAC0ScxHLFcDrc3fuF4kLWDJMV7RMLJyrc",
    authDomain: "card-vault-1bed7.firebaseapp.com",
    projectId: "card-vault-1bed7",
    storageBucket: "card-vault-1bed7.appspot.com",
    messagingSenderId: "437041309236",
    appId: "1:437041309236:web:fcde71bfbc418cff6e4c61",
    measurementId: "G-JBF9NNY5EV"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();