const button = document.querySelector("#surpriseButton");
const message = document.querySelector("#secretMessage");

button.addEventListener("click", function () {
  message.classList.remove("hidden");
  message.classList.add("show");
});