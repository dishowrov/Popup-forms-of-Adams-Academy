// document.getElementById("foy-close").addEventListener("click", () => {
//     document.getElementById("vibe_bp_login").classList.remove("active");
//     document.getElementById("vibe_bp_login").style.display = 'none';
// }); 


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
        const headSignin = document.querySelector(".dis-mobile-popup-head-signin");
        const headSignup = document.querySelector(".dis-mobile-popup-head-signup");

        if (signinVisible) {
            signinForm.style.display = "block";
            signupForm.style.display = "none";
            headSignin.style.display = "block";
            headSignup.style.display = "none";
        } else {
            signinForm.style.display = "none";
            signupForm.style.display = "block";
            headSignin.style.display = "none";
            headSignup.style.display = "block";
        }
    }

    function openMobilePopup() {
        popup.style.display = "block";
        toggleForms(true);
    }

    document.querySelector(".dis-mobile-open-popup-btn").addEventListener("click", openMobilePopup);
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