const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
    } else if (password === '') {
        alert('Password cannot be empty');
    } else {
        alert('Login successful');
        // You can process login here or redirect
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(email);
}
