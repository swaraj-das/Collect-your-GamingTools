import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in with Google
document.getElementById('google-login-btn').addEventListener('click', function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`Welcome ${user.displayName}!`);
            window.location.href = "../index.html";
        })
        .catch((error) => {
            alert('Login failed: ' + error.message);
        });
});

// Handle auth state change
onAuthStateChanged(auth, (user) => {
    const authLink = document.getElementById('auth-link');
    if (user) {
        authLink.textContent = 'Logout';
        authLink.onclick = handleLogout;
    } else {
        authLink.textContent = 'Login';
        authLink.setAttribute('href', 'login/login.html');
    }
});

// Handle logout
function handleLogout() {
    signOut(auth)
        .then(() => {
            alert('Logged out successfully!');
            window.location.reload();
        })
        .catch((error) => {
            alert('Logout failed: ' + error.message);
        });
}


