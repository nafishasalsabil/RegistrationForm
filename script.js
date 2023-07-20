const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-eye-btn");
const usercontainer = document.getElementById("user-container");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var flag=false;


const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}
function validate()
{
     // Retrieving input elements
     const fullnameInput = document.getElementById("fullname");
     const emailInput = document.getElementById("email");
     const dateInput = document.getElementById("date");
     const genderInput = document.getElementById("gender");
 
     // trimmed values from input fields
     const fullname = fullnameInput.value.trim();
     const email = emailInput.value.trim();
     const password = passwordInput.value.trim();
     const date = dateInput.value;
     const gender = genderInput.value;
 
     //  email validation
     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     // Clearing error messages
     document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
     document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
 
     //  validation 
     if (fullname === "") {
         showError(fullnameInput, "Enter your full name");
         
     }
     if (!emailPattern.test(email)) {
         showError(emailInput, "Enter a valid email address");
        
     }
     if (password === "") {
         showError(passwordInput, "Enter your password");
         
     }
     if (date === "") {
         showError(dateInput, "Select your date of birth");
         
     }
     if (gender === "") {
         showError(genderInput, "Select your gender");
        
     }
     
     
     // if any remaining errors before form submission
     const errorInputs = document.querySelectorAll(".form-group .error");
     if (errorInputs.length > 0) return;

     form.reset();
    
}

const handleFormData = (e) => {
    e.preventDefault();
    
    validate();
    
    
}

function showInput() {
   
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    const name = document.getElementById("fullname");
    const email = document.getElementById("email");
    const date = document.getElementById("date");
    const gender = document.getElementById("gender");
    const pass = document.getElementById("password"); 
    console.log(email.value);
    if(name.value !== "" && date.value !== "" && gender.value !== "" && pass.value !== "" && emailPattern.test(email.value))
    {
        row.insertCell(0).innerHTML= name.value;
        row.insertCell(1).innerHTML= email.value;
        row.insertCell(2).innerHTML= gender.value;
        row.insertCell(3).innerHTML= date.value;
    }
 
}

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
// Handling form submission event
form.addEventListener("submit", handleFormData);