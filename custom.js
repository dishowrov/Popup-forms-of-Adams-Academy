// document.getElementById("foy-close").addEventListener("click", () => {
//     document.getElementById("vibe_bp_login").classList.remove("active");
//     document.getElementById("vibe_bp_login").style.display = 'none';
// });

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the containers and buttons
    const signinPart = document.querySelector('.dis-popup-signin-wrapper');
    const signupPart = document.querySelector('.dis-popup-signup-wrapper');
    const toggleButtons = document.querySelectorAll('.dis-toggle-btn');

    // Function to show Sign In and hide Sign Up
    function showSigninPart() {
        signinPart.style.display = 'block';
        signupPart.style.display = 'none';
    }

    // Function to show Sign Up and hide Sign In
    function showSignupPart() {
        signinPart.style.display = 'none';
        signupPart.style.display = 'block';
    }

    // Add click event listeners to toggle buttons
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.closest('.dis-popup-signin-part')) {
                showSignupPart();
            } else {
                showSigninPart();
            }
        });
    });
});









