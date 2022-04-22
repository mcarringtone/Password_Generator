var generateBtn = document.getElementById("generate");
var textarea = document.getElementById("password");
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowercase = "qwertyuiopasdfghjklzxcvbnm".split("");
var number = "1234567890".split("");
var special = "!@#$%^&*()".split("");

function generatePassword() {
  // prompted for the length of the password
  var passwordLength = prompt("How many characters 8 - 128?");
  var combine = [];
  // if less than 8 of greater than 128 show alert if conditions are correct
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length 8 - 128.");
    passwordLength = prompt("How many characters 8 - 128?");
    console.log(passwordLength);
  }
  // prompted for uppercase letters
  var uppercaseCheck = prompt(
    "Would you like to include uppercase characters?"
  );
  // conditions for multiple common inputs using "or" operator
  if (
    uppercaseCheck === "yes" ||
    uppercaseCheck === "y" ||
    uppercaseCheck === "YES" ||
    uppercaseCheck === "Y"
  ) {
    // concat adds uppercase array to empty bracket
    combine = combine.concat(uppercase);
    console.log(combine);
  } else {
    var Areyousure = prompt(
      "Are you sure you don't want to include uppercase characters?"
    );
    if (
      Areyousure === "yes" ||
      Areyousure === "y" ||
      Areyousure === "YES" ||
      uppercaseCheck === "Y"
    ) {
      alert("That's ok");
    } else {
      uppercaseCheck = prompt(
        "Would you like to include uppercase characters?"
      );
    }
  }

  var lowercaseCheck = prompt(
    "Would you like to include lowercase characters?"
  );
  if (
    lowercaseCheck === "yes" ||
    lowercaseCheck === "y" ||
    lowercaseCheck === "YES" ||
    uppercaseCheck === "Y"
  ) {
    combine = combine.concat(lowercase);
    console.log(combine);
  }

  var numCheck = prompt("Would you like to include numbers characters?");
  if (
    numCheck === "yes" ||
    numCheck === "y" ||
    numCheck === "YES" ||
    uppercaseCheck === "Y"
  ) {
    combine = combine.concat(number);
    console.log(combine);
  }

  var specialPrompt = prompt("Would you like to include special characters?");
  if (
    specialPrompt === "yes" ||
    specialPrompt === "y" ||
    specialPrompt === "YES" ||
    uppercaseCheck === "Y"
  ) {
    combine = combine.concat(special);
    console.log(combine);
  }

  var completePassword = "";

  for (var i = 0; i < passwordLength; i++) {
    completePassword += combine[Math.floor(Math.random() * combine.length)];
  }
  textarea.innerHTML = completePassword;
}

generateBtn.addEventListener("click", generatePassword);
