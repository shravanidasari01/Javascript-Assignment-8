// script.js

document.addEventListener("DOMContentLoaded", function () {
    const getOtpBtn = document.getElementById("getOtp");
    const submitOtpBtn = document.getElementById("submitOtp");
    const otpDisplay = document.getElementById("otp-display");
    const otpFields = document.querySelectorAll(".otp-field");
    const errorMessage = document.getElementById("error-message");
    const otpBox = document.getElementById("otpBox");
    const homePage = document.getElementById("homePage");

    let generatedOtp = "";

    // Function to generate a random 4-digit OTP
    function generateOtp() {
        generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
        otpDisplay.textContent = generatedOtp; // Display OTP (for testing)
        errorMessage.textContent = "";
    }

    // Get OTP button click event
    getOtpBtn.addEventListener("click", function () {
        generateOtp();
    });

    // Function to validate OTP
    function validateOtp() {
        const enteredOtp = Array.from(otpFields).map(input => input.value).join("");

        if (enteredOtp === generatedOtp) {
            otpBox.style.display = "none";
            homePage.style.display = "block";
        } else {
            alert("Invalid OTP. Please try again.");
            errorMessage.textContent = "Invalid OTP. Try again.";
        }
    }

    // Submit OTP button click event
    submitOtpBtn.addEventListener("click", function () {
        validateOtp();
    });

    // Auto-focus next input field
    otpFields.forEach((field, index) => {
        field.addEventListener("input", function () {
            if (field.value.length === 1 && index < otpFields.length - 1) {
                otpFields[index + 1].focus();
            }
        });

        field.addEventListener("keydown", function (event) {
            if (event.key === "Backspace" && index > 0 && field.value.length === 0) {
                otpFields[index - 1].focus();
            }
        });
    });
});
