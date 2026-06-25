const targetDate = new Date("2026-09-04T00:00:00+03:30");

const countdownPage = document.querySelector("#countdownPage");
const birthdayPage = document.querySelector("#birthdayPage");
const timer = document.querySelector("#timer");

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    countdownPage.style.display = "none";
    birthdayPage.classList.remove("hidden");

    const button = document.querySelector("#surpriseButton");
    const message = document.querySelector("#secretMessage");

    button.addEventListener("click", function () {
      message.classList.remove("hidden");
      message.classList.add("show");
    });

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  timer.textContent =
    `${days} روز و ${hours} ساعت و ${minutes} دقیقه و ${seconds} ثانیه`;
}

updateCountdown();
setInterval(updateCountdown, 1000);