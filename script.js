import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const countTo = new Date("1 Jan 2022").getTime();

const c = setInterval(() => {

    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const minutes = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60; 

    const countDown = document.getElementById("countdown");

    countDown.textContent = `${format(days)}Days ${format(hours)}Hrs : ${format(minutes)}Min : ${format(seconds)}s`;

    if (totalSeconds < 0) {
        clearInterval(c);
        countDown.textContent = "Happy New Year! 🎉";
        for (let i = 0; i <= 20; i++) {
            confetti();
        }
   }

}, 1000)

function format(t) {
    return t < 10 ? `0${t}` : t;
}

