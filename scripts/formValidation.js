//password validation
const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const message = document.querySelector('#p-validation');
pass2.addEventListener('focusout', checkMatch);

function checkMatch() {
    if (pass1.value !== pass2.value) {
        message.textContent = "❗️Passwords DO NOT MATCH!";
        message.style.display = 'block';
        pass1.style.backgroundColor = '#fff0f3';
        pass1.value = '';
        pass2.value = '';
        pass1.focus();
    } else {
        message.style.display = 'none';
        pass1.style.backgroundColor = '';
    }
}

//email validation
const form = document.getElementById('myForm');
const eInput = document.getElementById('email');
const eError = document.getElementById('e-validation');
const allowedDomain = 'byui.edu';

form.addEventListener('submit', function(event) {
    if (!validateEmailWithDomain(eInput.value, allowedDomain)) {
        event.preventDefault();
        eError.textContent = 'Please enter a valid email address from byui.edu';
        eInput.value = '';
        eInput.style.backgroundColor = '#fff0f3';
    } else {
        eError.textContent = '';
    }
});

function validateEmailWithDomain(email, allowedDomain) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        const domain = email.split('@')[1];
        return domain ===allowedDomain;
    }     
    return false;
}

//rating
const rangeValue = document.getElementById('rangevalue');
const range = document.getElementById('rating');
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}