function signup() {
    // Validate email
    var email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    // Validate password
    var password = document.getElementById('password').value;
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    // Check if passwords match
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // If all validations pass, display success message
    alert('Account created!');
    
    // Redirect to the sign-in page
    window.location.href = "/Html/signin.html";
}

// Function to validate email
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password
function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Function to toggle password visibility
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
function signin() {
    // Add your sign-in logic here
    alert('Signing successful');
}