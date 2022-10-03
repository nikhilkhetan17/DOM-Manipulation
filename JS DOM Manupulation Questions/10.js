// login-btn-text is giving me an array, so i have selected that button by square bracket [2]

const button = document.querySelectorAll(".login-btn-text")[2];

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "red";
});
