function showRegistration() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("form-title").textContent = "Register";
}

function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("form-title").textContent = "Login";
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email && password) {
        alert("Logged in successfully!");
    } else {
        alert("Please fill out all fields.");
    }
}

function register() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (username && email && password) {
        alert("Registered successfully!");
    } else {
        alert("Please fill out all fields.");
    }
}
