
window.addEventListener("DOMContentLoaded", () => {
  const password = document.getElementById("password");
  const requiredField = document.querySelectorAll(".required-field");
  const email = document.getElementById("emailAdd");
  const userName = document.getElementById("userName");
  const signUp = document.getElementById("signUp");
  const errorMessages = [
    `<span>An email address must contain a single @</span>`,
    `<span>Name with your email is suggested</span>`,
    `<p> at least one uppercase letter</p>
      <p>  at least one lowercase letter</p>
      <p>  at least one digit</p>
      <p>  8 alphanumeric characters</p>`
  ]

  // input field Information upon clicking
  function inputFieldInformation(inputArea, field, text) {
    inputArea.addEventListener("click", () => {
      inputArea.style.border = "2px solid #006570";
      requiredField[field].innerHTML = text;
    });
  }

  // style input field if error occur 
  const errorStyle = (inputField, field, errorMessage = "Must contain value") => {
    inputField.style.border = "2px solid red";
    requiredField[field].style.display = "inline-block";
    requiredField[field].style.color = "red";
    requiredField[field].innerHTML = errorMessage;
  }

  // error message when fields are empty
  const validation = (inputField, fieldNumber) => {
    if (!inputField.value) {
      errorStyle(inputField, fieldNumber)

    }
  }

  // validating password
  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!password.value && password.value !== passwordRegex) {
      errorStyle(password, 2, errorMessages[2])
    }
  }

  inputFieldInformation(email, 0, errorMessages[0]);
  inputFieldInformation(userName, 1, errorMessages[1]);
  inputFieldInformation(password, 2, errorMessages[2]);
  signUp.addEventListener("click", () => {
    validation(email, 0, errorMessages[0])
    validation(userName, 1, errorMessages[1])
    validatePassword();
  });

})
