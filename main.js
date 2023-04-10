const form = document.querySelector(".foot");
const email = document.querySelector("#email");
const validateP = document.querySelector(".validation-p");
const submite = document.querySelector(".sub");

function checkEmali() {
  const pattern = "@";
  if (!email.value.match(pattern)) {
    validateP.innerHTML = "Check your email please";
    email.style.borderColor = "#FF4343";
  }
}
submite.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmali();
});
