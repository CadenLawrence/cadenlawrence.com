import firebase from "firebase";

var config = {
        apiKey: "AIzaSyBidGz1gh6YGB7S9o-3hDHm5xt5HaopS00",
        authDomain: "portfolio-website-48028.firebaseapp.com",
        databaseURL: "https://portfolio-website-48028.firebaseio.com",
        projectId: "portfolio-website-48028",
        storageBucket: "portfolio-website-48028.appspot.com",
        messagingSenderId: "1088087538909"
    };

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth