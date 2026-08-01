const revTime = document.getElementById("timer");

let totalSec = 600;

const countdown = setInterval(() => {
    totalSec--;

    let minutes = Math.floor(totalSec / 60);
    let seconds = totalSec % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    revTime.innerHTML = `${minutes}:${seconds}`;

    if (totalSec < 0) {
        clearInterval(countdown);

        revTime.innerHTML = "00:00";

        alert("⏰ Time's up!");
    }

}, 1000)