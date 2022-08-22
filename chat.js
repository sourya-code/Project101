// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBjCegcL-sa5-KckLWXdlr6v-Jmbo1-3Yo",
    authDomain: "chat-app-1a398.firebaseapp.com",
    databaseURL: "https://chat-app-1a398-default-rtdb.firebaseio.com",
    projectId: "chat-app-1a398",
    storageBucket: "chat-app-1a398.appspot.com",
    messagingSenderId: "240201044526",
    appId: "1:240201044526:web:53d651d2acbe1972ac45bf"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



