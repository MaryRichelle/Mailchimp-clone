const emailAdd = document.getElementById("emailAdd");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const requiredField = document.querySelectorAll(".required-field");
const signUp = document.getElementById("signUp");
function inputSpan(inputArea, text) {
  inputArea.addEventListener("click", () => {
    inputArea.style.border = "2px solid #006570";
   
      emailDescription.innerText = text;
     });
}
inputSpan(emailAdd,  "An email address must contain a single @");
inputSpan(
  userName,

  " enter a value"
);
inputSpan(password, "Pleas enter a value");
signUp.addEventListener("click", () => {
  console.log("yes");
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (emailAdd.value == "") {
    emailAdd.style.border = "2px solid red";
    requiredField[0].style.display = "inline-block";
    requiredField[0].style.color = "red";
  }

  if (userName.value == "") {
    userName.style.border = "2px solid red";
    requiredField[1].style.display = "inline-block";
    requiredField[1].style.color = "red";
  }
  if (password !== passwordRegex) {
    password.style.border = "2px solid red";
    requiredField[2].style.display = "inline-block";
    requiredField[2].style.color = "red";
    requiredField[2].innerHTML = `<p>X at least one uppercase letter</p>
      <p> X at least one lowercase letter</p>
      <p> X at least one digit</p>
      <p> X 8 alphanumeric characters</p>
      `;
  }
});
