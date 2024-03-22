
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, set, push, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChPsudJz3Xg9aU_by5xVaeDkweBeHPpxU",
    authDomain: "ns-electronic.firebaseapp.com",
    databaseURL: "https://ns-electronic-default-rtdb.firebaseio.com",
    projectId: "ns-electronic",
    storageBucket: "ns-electronic.appspot.com",
    messagingSenderId: "741203025927",
    appId: "1:741203025927:web:d386451555b3073068caa2",
    measurementId: "G-CR8Z6RWHPG"
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

var userName = document.getElementById('userName')
var email = document.getElementById('email')
var password = document.getElementById('password')

window.signupUser = function () {
    var obj = {
        userName: userName.value,
        email: email.value,
        password: password.value
    }
    console.log(obj)
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (res) {
            alert("User Created Successfully",res)

            obj.id = res.user.uid

            var reference = ref(db,`users/${obj.id}`)
            set(reference,obj).then(function(){
                console.log("User Added in Database")
                localStorage.setItem('key',JSON.stringify(obj.id))
                window.location.href="../index.html"
            }).catch(function(dbError){
                console.log("Database Error",dbError)
            })
        }).catch(function(err){
            console.log(err)
        })
}