// Selectors




const minutesEl = document.getElementById("minutes");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const secondsEl = document.getElementById("seconds");


function timer() {
    let today = new Date();
    let worldCup = new Date(2026, 6, 11);
    let secondTimer = (worldCup - today) / 1000;

    // console.log(secondTimer);

    let days = Math.floor(secondTimer / 60 / 60 / 24);

    let hours = Math.floor(secondTimer / 60 / 60 % 24);
    let minutes = Math.floor(secondTimer / 60 % 60);
    let seconds = Math.floor(secondTimer % 60);
    // console.log(hours);

    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    hoursEl.innerHTML = hours;
    daysEl.innerHTML = days;

}
setInterval(() =>{
    timer();
}, 1000)





