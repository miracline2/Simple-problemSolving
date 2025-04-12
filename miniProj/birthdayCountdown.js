const birthDay = new Date("2025-04-14T00:00:00");
const countDown = document.getElementById("birthDayCountDown");

setInterval(() => {
    const now = new Date();
    const diff = birthDay.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countDown.textContent = `I'm turning 25 in ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds 🎉`;
}, 1000);
