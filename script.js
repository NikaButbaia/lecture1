function restrictAlphabets(e) {
  let x = e.which || e.keycode;
  if (x >= 44 && x <= 57) return true;
  else return false;
}

function checkPassword() {
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  let message = document.getElementById("message");

  if (password.length != 0) {
    if (password == password2) {
      message.textContent = "პაროლები ემთხვევა";
    } else {
      message.textContent = "პაროლები არ ემთხვევა";
    }
  }
}

// function validate() {
//   let mail = document.getElementById("email").value;
//   let vld = /^([a-Za-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
//   if (vld.text(mail)) {
//     alert("ვალიდური მაილი");
//     return true;
//   } else {
//     alert("ვალიდური მეილი გამოიყენეთ");
//     return false;
//   }
// }
