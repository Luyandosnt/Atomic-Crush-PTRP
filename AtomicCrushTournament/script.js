// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC87tRBAe-s-82kFoXA_MUpPmesl00F_Io",
    authDomain: "atomicrushs1tournamentsignup.firebaseapp.com",
    projectId: "atomicrushs1tournamentsignup",
    storageBucket: "atomicrushs1tournamentsignup.appspot.com",
    messagingSenderId: "754382099189",
    appId: "1:754382099189:web:a07e513c9cd4265e94ebbc",
    measurementId: "G-CJXX1DTQVV",
    databaseURL: "https://atomicrushs1tournamentsignup-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.signup-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission from reloading the page

        // Get form values
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Validate that both fields are filled
        if (!email || !phone) {
            alert("Please enter both email and phone number.");
            return;
        }

        // Save the data to Firebase
        const signupData = {
            email: email,
            phone: phone
        };

        const signupsRef = ref(db, 'signups');
        push(signupsRef, signupData)
            .then(function() {
                alert("Thank you for signing up! We'll be in touch soon.");
                document.querySelector('.signup-form').reset();  // Clear the form
            })
            .catch(function(error) {
                console.error("Error saving data to Firebase:", error);
            });
    });
});