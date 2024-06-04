document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    function removeError(input) {
        const parent = input.parentNode;
        const errorElement = parent.querySelector('.error-text');
        if (errorElement) {
            errorElement.remove();
        }
    }

    function makeError(input, errorMessage) {
        const parent = input.parentNode;
        let errorElement = parent.querySelector('.error-text');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-text');
            parent.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    }

    function validateName(input) {
        const value = input.value.trim();
        if (!value) {
            makeError(input, 'Please enter your name');
            return false;
        }
        removeError(input);
        return true;
    }

    function validateMessage(input) {
        const value = input.value.trim();
        if (value.length < 5) {
            makeError(input, 'Message must be at least 5 characters long');
            return false;
        }
        removeError(input);
        return true;
    }

    function validatePhone(input) {
        const value = input.value.trim();
        const phoneRegex = /^\+380\d{9}$/;
        if (!phoneRegex.test(value)) {
            makeError(input, 'Please enter a valid phone number starting with +380');
            return false;
        }
        removeError(input);
        return true;
    }

    function validateEmail(input) {
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            makeError(input, 'Please enter a valid email address');
            return false;
        }
        removeError(input);
        return true;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');

        const isNameValid = validateName(nameInput);
        const isMessageValid = validateMessage(messageInput);
        const isPhoneValid = validatePhone(phoneInput);
        const isEmailValid = validateEmail(emailInput);

        if (isNameValid && isMessageValid && isPhoneValid && isEmailValid) {
            const formData = new FormData(this);
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });
            alert('Success');
        }
    });
});
