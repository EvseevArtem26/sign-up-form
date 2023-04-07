const form = document.querySelector("form");
const firstNameField = document.getElementById("first_name");
const lastNameField = document.getElementById("last_name");
const emailField = document.getElementById("email");
const phoneNumberField = document.getElementById("phone_number");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");

const nameRegExp = /^[a-zA-z]{1,20}$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp = /^[\+]?[0-9]{1,3}[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

function validateFirstName(){
    const isValid = nameRegExp.test(firstNameField.value);
    if(isValid){
        firstNameField.className = "";
    } else {
        firstNameField.className = "invalid";
    }
}

function validateLastName(){
    const isValid = nameRegExp.test(lastNameField.value);
    lastNameField.className = isValid ? "" : "invalid";
}

function validateEmail(){
    const isValid = emailRegExp.test(emailField.value);
    emailField.className = isValid ? "" : "invalid";
}

function validatePhoneNumber(){
    const isValid = phoneRegExp.test(phoneNumberField.value);
    phoneNumberField.className = isValid ? "" : "invalid";
}

function validatePassword(){
    const isValid = passwordField.value.length !== 0 && passwordField.value === confirmPasswordField.value;
    if(isValid){
        passwordField.className = "";
        confirmPasswordField.className = "";
    } else {
        passwordField.className = "invalid";
        confirmPasswordField.className = "invalid";
    }
}


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhoneNumber();
    validatePassword();


    firstNameField.oninput = validateFirstName;
    lastNameField.oninput = validateLastName;
    emailField.oninput = validateEmail;
    phoneNumberField.oninput = validatePhoneNumber;
    passwordField.oninput = validatePassword;
    confirmPasswordField.oninput = validatePassword;
});


