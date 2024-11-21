document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.querySelector(".signup-button");

    signupButton.addEventListener("click", (e) => {
        e.preventDefault();
        const name = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;

        if (!name || !email || !password || !confirmPassword) {
            alert("Every field is required.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const userdata = { name, email, password };
        registerUser(userdata);
    });

    document.addEventListener("DOMContentLoaded", function () {
        const rememberMeCheckbox = document.getElementById("remember-me");
    
        // Load the Remember Me state from local storage
        rememberMeCheckbox.checked = localStorage.getItem("rememberMe") === "true";
    
        // Handle form submission
        document.querySelector("form").addEventListener("submit", function (event) {
            event.preventDefault();
    
            // Save Remember Me state in local storage
            localStorage.setItem("rememberMe", rememberMeCheckbox.checked);
    
            // Retrieve form data
            const formData = {
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                rememberMe: rememberMeCheckbox.checked
            };
    
            // Send form data to the server (example AJAX call, replace URL with your endpoint)
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    });    

    const registerUser = async (user) => {
        try {
            const res = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
            });
            const data = await res.json();
            if (data.success) {
                alert('Signup successful! Redirecting to login...');
                window.location.href = "../login/login.html"; // Redirect after signup
            } else {
                alert(data.message); // Show error message
            }
        } catch (err) {
            alert('Error: ' + err.message); // Show error message
        }
    };

    // Password Strength Check
    const passwordInput = document.querySelector("#password");
    const conditions = {
        length: document.getElementById("length"),
        uppercase: document.getElementById("uppercase"),
        lowercase: document.getElementById("lowercase"),
        number: document.getElementById("number"),
        special: document.getElementById("special")
    };

    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;

        // Check each condition and toggle the "met" class
        conditions.length.classList.toggle("met", password.length >= 8);
        conditions.uppercase.classList.toggle("met", /[A-Z]/.test(password));
        conditions.lowercase.classList.toggle("met", /[a-z]/.test(password));
        conditions.number.classList.toggle("met", /\d/.test(password));
        conditions.special.classList.toggle("met", /[!@#$%^&*(),.?":{}|<>]/.test(password));
    });
});
