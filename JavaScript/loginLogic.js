function signup() {
    // Validate name
    var nameInput = document.getElementById('name');
    var name = nameInput.value.trim();
    if (name === '') {
        showAlert('Please enter your full name');
        return;
    }
     // Validate email
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    if (!validateEmail(email)) {
        showAlert('Invalid email address');
        return;
    }
    // Validate password
    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;
    if (!validatePassword(password)) {
        showAlert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }
    // Check if passwords match
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
        showAlert('Passwords do not match');
        return;
    }
    // If all validations pass, display success message
    showAlert('Account created!');
    // Redirect to the sign-in page after a short delay
    setTimeout(function () {
        window.location.href = "/Html/index.html";
    }, 2000);
}

function showAlert(message) {
    var alertMessage = document.getElementById('alertMessage');

    if (!alertMessage) {
        alertMessage = document.createElement('div');
        alertMessage.id = 'alertMessage';
        document.body.appendChild(alertMessage);
    }

    alertMessage.innerText = message;
    alertMessage.style.display = 'block';

    setTimeout(function () {
        alertMessage.style.display = 'none';
    }, 3000);
}

// Existing functions...

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var checkbox = document.getElementById('showPasswordCheckbox');

    passwordInput.type = checkbox.checked ? "text" : "password";
    confirmPasswordInput.type = checkbox.checked ? "text" : "password";
}

function handleEnterKey(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}
// loginLogic.js

// Your existing functions...

// SignIn logic
function signin() {
    // Get the values from the input fields
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    var username = usernameInput.value;
    var password = passwordInput.value;

    // Perform your sign-in logic here
    // For simplicity, let's assume a successful sign-in for any non-empty username and password
    if (username.trim() !== '' && password.trim() !== '') {
        // If sign-in is successful, show success message and redirect
        showAlert('Signing successful');

        // Redirect to the desired page (e.g., /Html/nav.html)
        setTimeout(function () {
            window.location.href = "/Html/nav.html";
        }, 2000); // Redirect after 2 seconds (adjust as needed)
    } else {
        // If there's an error, show an error message
        showAlert('Error: Invalid username or password');
    }
}
