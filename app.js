var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
document.getElementById("cipher").style.visibility = "hidden";
document.getElementById("plain").style.visibility = "hidden";
var cipherText = "";
var backToUser = "";

const getUserText = (e) => {
  e.preventDefault();
  var userText = document.getElementById("user-text").value;
  userText = userText.toLowerCase();
  for (var i = 0; i < userText.length; i++) {
    // console.log(userText[i]);
    if (userText.slice(i, i + 1) === " ") {
      cipherText += " ";
    } else {
      var index = alphabets.indexOf(userText[i]);
      // console.log(index);

      if (index == 23) {
        index = -3;
      } else if (index == 24) {
        index = -2;
      }
      if (index == 25) {
        index = -1;
      }
      cipherText += alphabets[index + 3];
    }
  }
  if (cipherText !== "") {
    document.getElementById("cipher").style.visibility = "visible";
    document.getElementById("cipher-butt").style.visibility = "hidden";
    document.getElementById("cipher-result").textContent = cipherText;
  }
};

const plainText = (e) => {
  e.preventDefault();
  document.getElementById("plain-butt").style.visibility = "hidden";
  
  for (var i = 0; i < cipherText.length; i++) {
    if (cipherText.slice(i, i + 1) === " ") {
      backToUser += " ";
    } else {
      var index = alphabets.indexOf(cipherText[i]);

      if (index == 0) {
        index = 23;
      } else if (index == 1) {
        index = 24;
      }
      if (index == 2) {
        index = 25;
      }
      backToUser += alphabets[index - 3];
    }
  }
  document.getElementById("plain").style.visibility = "visible";
  document.getElementById("plain-result").textContent = backToUser;
};
