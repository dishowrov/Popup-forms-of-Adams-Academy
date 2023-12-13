// document.getElementById("foy-close").addEventListener("click", () => {
//     document.getElementById("vibe_bp_login").classList.remove("active");
//     document.getElementById("vibe_bp_login").style.display = 'none';
// }); 

/*
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

document.addEventListener("DOMContentLoaded", function () {
    // Initial setup: hide the popup and signup form
    const popup = document.querySelector(".dis-mobile-popup");
    popup.style.display = "none";
    document.querySelector(".dis-mobile-popup-signup-form").style.display = "none";

    // Function to toggle between signin and signup forms
    function toggleForms(signinVisible) {
        const signinForm = document.querySelector(".dis-mobile-popup-signin-form");
        const signupForm = document.querySelector(".dis-mobile-popup-signup-form");

        if (signinVisible) {
            signinForm.style.display = "block";
            signupForm.style.display = "none";
        } else {
            signinForm.style.display = "none";
            signupForm.style.display = "block";
        }
    }

    // Event listener for the main popup button
    document.querySelector(".dis-mobile-popup-btn").addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Event listener for the signup button
    document.querySelector(".dis-mobile-popup-signup-btn").addEventListener("click", function () {
        toggleForms(false);
    });

    // Event listener for the signin button
    document.querySelector(".dis-mobile-popup-signin-btn").addEventListener("click", function () {
        toggleForms(true);
    });

    // Event listener for the close button
    document.querySelector(".dis-mobile-popup-close-btn").addEventListener("click", function () {
        popup.style.display = "none";
    });
});
*/

document.addEventListener("DOMContentLoaded", function () {
    // Part 1: Toggle between Sign In and Sign Up
    const signinPart = document.querySelector('.dis-popup-signin-wrapper');
    const signupPart = document.querySelector('.dis-popup-signup-wrapper');
    const toggleButtons = document.querySelectorAll('.dis-toggle-btn');

    function showSigninPart() {
        signinPart.style.display = 'block';
        signupPart.style.display = 'none';
    }

    function showSignupPart() {
        signinPart.style.display = 'none';
        signupPart.style.display = 'block';
    }

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.closest('.dis-popup-signin-part')) {
                showSignupPart();
            } else {
                showSigninPart();
            }
        });
    });

    // Part 2: Open and close the login popup
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

    popupLogin.style.display = 'none';

    signinBtn.addEventListener('click', openSigninPopup);
    signupBtn.addEventListener('click', openSignupPopup);

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closePopup);
    });

    // Part 3: Mobile Popup functionality
    const popup = document.querySelector(".dis-mobile-popup");
    popup.style.display = "none";
    document.querySelector(".dis-mobile-popup-signup-form").style.display = "none";

    function toggleForms(signinVisible) {
        const signinForm = document.querySelector(".dis-mobile-popup-signin-form");
        const signupForm = document.querySelector(".dis-mobile-popup-signup-form");

        if (signinVisible) {
            signinForm.style.display = "block";
            signupForm.style.display = "none";
        } else {
            signinForm.style.display = "none";
            signupForm.style.display = "block";
        }
    }

    document.querySelector(".dis-mobile-popup-btn").addEventListener("click", function () {
        popup.style.display = "block";
    });

    document.querySelector(".dis-mobile-popup-signup-btn").addEventListener("click", function () {
        toggleForms(false);
    });

    document.querySelector(".dis-mobile-popup-signin-btn").addEventListener("click", function () {
        toggleForms(true);
    });

    document.querySelector(".dis-mobile-popup-close-btn").addEventListener("click", function () {
        popup.style.display = "none";
    });
});