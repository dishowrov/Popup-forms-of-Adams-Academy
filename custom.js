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

document.addEventListener("DOMContentLoaded", function () {
    const signinWrapper = document.querySelector('.dis-popup-signin-wrapper');
    const signupWrapper = document.querySelector('.dis-popup-signup-wrapper');
    const popupLogin = document.querySelector('.popup_login');
    const signinBtn = document.querySelector('.dis-popup-signin-btn');
    const signupBtn = document.querySelector('.dis-popup-signup-btn');
    const closeBtns = document.querySelectorAll('.dis-popup-close-btn');

    function openSigninPopup() {
        signinWrapper.style.display = 'block';
        signupWrapper.style.display = 'none';
        popupLogin.style.display = 'block';
    }

    function openSignupPopup() {
        signinWrapper.style.display = 'none';
        signupWrapper.style.display = 'block';
        popupLogin.style.display = 'block';
    }

    function closePopup() {
        popupLogin.style.display = 'none';
    }

    // Hide popupLogin initially
    popupLogin.style.display = 'none';

    // Add click event listeners
    signinBtn.addEventListener('click', openSigninPopup);
    signupBtn.addEventListener('click', openSignupPopup);

    // Add click event listeners to all close buttons
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closePopup);
    });
});












