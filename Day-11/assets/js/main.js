document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // alert("Form submitted✅");
});

document.querySelector("form").addEventListener("submit", function () {
  const name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("name").style.borderBottomColor =
      "rgba(255, 0, 0, 0.21)";
    document.getElementById("name-error").style.display = "block";
  }
});

document.querySelector("form").addEventListener("change", function () {
  const name = document.getElementById("name").value;
  if (name !== "") {
    document.getElementById("name").style.borderBottomColor =
      "rgba(34, 255, 0, 0.21)";
    document.getElementById("name-error").style.display = "none";
  }
});

document.querySelector("form").addEventListener("submit", function () {
  const email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("email").style.borderBottomColor =
      "rgba(255, 0, 0, 0.21)";
    document.getElementById("email-error").style.display = "block";
  }
});

document.querySelector("form").addEventListener("change", function () {
  const email = document.getElementById("email").value;
  if (email !== "") {
    document.getElementById("email").style.borderBottomColor =
      "rgba(34, 255, 0, 0.21)";
    document.getElementById("email-error").style.display = "none";
  }
});

document.querySelector("form").addEventListener("submit", function () {
  const pass = document.getElementById("pass").value;
  if (pass === "") {
    document.getElementById("pass").style.borderBottomColor =
      "rgba(255, 0, 0, 0.21)";
    document.getElementById("pass-error").style.display = "block";
    document.getElementById("pass-see").style.display = "none";
    document.getElementById("pass-nosee").style.display = "none";
  }
});

document.querySelector("form").addEventListener("change", function () {
  const pass = document.getElementById("pass").value;
  if (pass !== "") {
    document.getElementById("pass").style.borderBottomColor =
      "rgba(34, 255, 0, 0.21)";
    document.getElementById("pass-error").style.display = "none";
    document.getElementById("pass-see").style.display = "block";
    document.getElementById("pass-nosee").style.display = "block";
  }
});

document.querySelector("form").addEventListener("submit", function () {
  const pass2 = document.getElementById("pass2").value;
  const pass = document.getElementById("pass").value;
  if (pass2 === "") {
    document.getElementById("pass2").style.borderBottomColor =
      "rgba(255, 0, 0, 0.21)";
    document.getElementById("pass2-error").style.display = "block";
    document.getElementById("pass-see2").style.display = "none";
    document.getElementById("pass-nosee2").style.display = "none";
  }
  if (pass2 !== pass) {
    document.getElementById("pass2").style.borderBottomColor =
      "rgba(255, 0, 0, 0.21)";
    document.getElementById("pass2-error").style.display = "block";
    document.getElementById("pass-see2").style.display = "none";
    document.getElementById("pass-nosee2").style.display = "none";
  }
});

document.querySelector("form").addEventListener("change", function () {
  const pass2 = document.getElementById("pass2").value;
  const pass = document.getElementById("pass").value;
  if ((pass2 !== "", pass2 == pass)) {
    document.getElementById("pass2").style.borderBottomColor =
      "rgba(34, 255, 0, 0.21)";
    document.getElementById("pass2-error").style.display = "none";
    document.getElementById("pass-see2").style.display = "block";
    document.getElementById("pass-nosee2").style.display = "block";
  }
});

//--------- pass --------

let togglePassword = document.getElementById("pass-nosee");
let passwordInput = document.getElementById("pass");

togglePassword.addEventListener("click", () => {
  // password show/hide
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  // icon change
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

//--------- pass2 --------
let togglePassword2 = document.getElementById("pass-nosee2");
let passwordInput2 = document.getElementById("pass2");

togglePassword2.addEventListener("click", () => {
  // password show/hide
  const isPassword2 = passwordInput2.type === "password";
  passwordInput2.type = isPassword2 ? "text" : "password";

  // icon change
  togglePassword2.classList.toggle("fa-eye");
  togglePassword2.classList.toggle("fa-eye-slash");
});

//------ Dark -----
const toggleBtn = document.getElementById("checkbox-wrapper-54");
const root = document.documentElement;

toggleBtn.addEventListener("change", () => {
  root.classList.toggle("dark", toggleBtn.checked);
});
