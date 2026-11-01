
// SELECT ALL SCREENS
const screens = document.querySelectorAll(".screen");

// FUNCTION TO CHANGE SCREENS
function showScreen(screenId) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
        selectedScreen.scrollTop = 0;
    }
}

// SCREEN NAVIGATION
document.querySelectorAll("[data-screen]").forEach(function(button) {

    button.addEventListener("click", function() {

        const screenId = button.getAttribute("data-screen");

        showScreen(screenId);

    });

});


// SHOW AND HIDE PASSWORD
document.querySelectorAll(".toggle-password").forEach(function(button) {

    button.addEventListener("click", function() {

        const inputId = button.getAttribute("data-password");
        const passwordInput = document.getElementById(inputId);

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }

    });

});


// SIGN UP FORM
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Sign up form submitted successfully!");

});


// LOGIN FORM
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login form submitted successfully!");

});
