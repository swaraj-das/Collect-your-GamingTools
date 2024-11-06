document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.querySelector(".signup-button");

    // List of trusted email domains
    const trustedDomains = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com" , "protonmail.com" , "icloud.com" , "tutanota.com"];

    signupButton.addEventListener("click", (e) => {
        e.preventDefault();

        const name = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;
        const emailError = document.querySelector("#email-error"); // Reference to email error div
        const passwordError = document.querySelector("#password-error"); // Reference to password error div

        // Clear any previous error messages
        emailError.textContent = "";
        emailError.style.display = "none"; // Hide the error message by default
        passwordError.textContent = "";
        passwordError.style.display = "none"; // Hide the error message by default

        if (!name || !email || !password || !confirmPassword) {
            emailError.textContent = "Every field is required.";
            emailError.style.display = "block";
            return;
        }

        // Email domain validation
        const emailDomain = email.split("@")[1]; // Get the domain from the email
        if (!trustedDomains.includes(emailDomain)) {
            emailError.textContent = "Please use an email address from a trusted provider (e.g., Gmail, Outlook, Yahoo) etc.";
            emailError.style.display = "block";
            return;
        }

        // Password matching validation
        if (password !== confirmPassword) {
            passwordError.textContent = "Passwords do not match.";
            passwordError.style.display = "block";
            return;
        }
        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return; // Stop the function if the email is not in the right format
        }

        const userdata = {
            name,
            email,
            password,
            confirmPassword
        };

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
            console.log(data);
            window.location.href = "http://127.0.0.1:5500/Collect-your-GamingTools/login/login.html";
        } catch (err) {
            console.log(err.message);
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
