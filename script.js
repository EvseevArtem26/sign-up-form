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
    const label = document.querySelector("#first_name + span");
    const isValid = nameRegExp.test(firstNameField.value);
    if(isValid){
        firstNameField.className = "";
    } else {
        firstNameField.className = "invalid";
        if(firstNameField.value.length === 0){
            label.textContent = "this field is required";
        } else {
            label.textContent = "name should not contain digits or special characters";
        }
    }
}

function validateLastName(){
    const label = document.querySelector("#last_name + span");
    const isValid = nameRegExp.test(lastNameField.value);
    if(isValid){
        lastNameField.className = "";
    } else {
        lastNameField.className = "invalid";
        if(lastNameField.value.length === 0){
            label.textContent = "this field is required";
        } else {
            label.textContent = "last name should not contain digits or special characters";
        }
    }
}

function validateEmail(){
    const label = document.querySelector("#email + span");
    const isValid = emailRegExp.test(emailField.value);
    emailField.className = isValid ? "" : "invalid";

    if(!isValid){
        if(emailField.value.length === 0){
            label.textContent = "this field is required";
        } else {
            label.textContent = "email is invalid";
        }
    } else {
        label.textContent = "";
    }
}

function validatePhoneNumber(){
    const label = document.querySelector("#phone_number + span");
    const isValid = phoneRegExp.test(phoneNumberField.value);
    phoneNumberField.className = isValid ? "" : "invalid";
    if(!isValid){
        if(phoneNumberField.value.length === 0){
            label.textContent = "this field is required";
        } else {
            label.textContent = "phone number is invalid";
        }
    }
}

function validatePassword(){
    const labelA = document.querySelector("#password + span");
    const labelB = document.querySelector("#confirm_password + span");
    const isValid = 
        passwordField.value.length !== 0 && 
        passwordField.value.length >= 6 && 
        passwordField.value.length <=20 && 
        passwordField.value === confirmPasswordField.value;

    passwordField.className = isValid ? "" : "invalid";
    confirmPasswordField.className = isValid ? "": "invalid";

    if(passwordField.value.length  === 0){
        labelA.textContent = "this field is required";
    } else if (passwordField.value.length < 6){
        labelA.textContent = "password must be atleast 6 characters long";
    } else {
        labelA.textContent = "";
    }

    if (confirmPasswordField.value.length === 0){
        labelB.textContent = "this field is required";
    } else if (passwordField.value !== confirmPasswordField.value){
        labelB.textContent = "passwords do not match";
    } else {
        labelB.textContent = "";
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


