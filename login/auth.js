
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = "en";
  const provider = new GoogleAuthProvider();

  // Sign in with Google
  const googleLoginBtn = document.getElementById('google-login-btn');
  googleLoginBtn?.addEventListener('click', function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User logged in:', user);

        // Redirect to the home page
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  });

  // Handle auth state change and toggle login/logout button
  window.addEventListener('load', () => {
    const authLink = document.getElementById('auth-link');

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, change the link to "Logout"
        authLink.textContent = 'Logout';
        authLink.removeAttribute('href');
        authLink.addEventListener('click', handleLogout);
      } else {
        // If the user is not logged in, change the link to "Login"
        authLink.textContent = 'Login';
        authLink.setAttribute('href', 'login/login.html');
        authLink.removeEventListener('click', handleLogout);
      }
    });
  });

  // Handle logout
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
        window.location.reload(); // Reload the page if needed
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  }
