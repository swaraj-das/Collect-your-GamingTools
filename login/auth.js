import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app);
  auth.languageCode ="en"
  const provider=new GoogleAuthProvider();
  console.log("hello");
  const googleLogin =document.getElementById('google-login-btn');
  googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href="../index.html";

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

  });
});
