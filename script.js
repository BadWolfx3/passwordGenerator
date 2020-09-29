//Created variables
var password = [];
var lowerL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = [1,2,3,4,5,6,7,8,9, 0];
var symbol = ["!","@","#","$","%","^","&","*","=","-","_"];
//Assignment Code
var generateBtn = document.querySelector("#generate");
var selection = [];

//Function to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.getElementById("password").innerHTML = password;
}

//Add event listener
generateBtn.addEventListener("click", writePassword);

//Prompts for user to pick from
function generatePassword () {
  characterAmount = (prompt ("How many characters would you like your password to contain? Pick between 8 and 128."));
  //Alert if they don't input a number
  if (!characterAmount) {
    alert ("Please input a number");
    //Alert if they pick a number too small or too big
  } else if (characterAmount < 8 || characterAmount > 128) {
  alert("Please choose between 8 and 128 characters.");
  } else {
    //More prompts to confirm what they would like in their password
    passNumber = confirm("Would you like numbers in your password?");
    passSymbol = confirm("Would you like symbols in your password?");
    passUpper = confirm("Would you like upper case letters in your password?");
    passLower = confirm("Would you like lower case letters in your password?");

    console.log(passNumber);
    console.log(passSymbol);
    console.log(passUpper);
    console.log(passLower);
  



  //Decided which data to push
  if (passNumber) {
  selection = selection.concat(number);
  }
  if (passSymbol) {
  selection = selection.concat(symbol);
  }
  if (passUpper) {
  selection = selection.concat(upperL);
  }
  if (passLower) {
  selection = selection.concat(lowerL);
  }};

  //Loop to run code and generate password
  for (var i = 0; i < characterAmount; i++) {
  var j = selection[Math.floor(Math.random() * selection.length)];
  password.push(j);
  }
  password = password.join("");
  return password;
}



