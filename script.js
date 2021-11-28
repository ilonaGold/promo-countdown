let time = 15;
let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
    let promoTimer = setInterval(() => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.textContent = "Promo has ended";
        } else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 / 24); 
            const hours = Math.floor(promoTime / 3600) % 24; 
            const min = Math.floor(promoTime / 60) % 60; 
            const sec = Math.floor(promoTime % 60); 

            counting.innerHTML = `TIME: ${format(hours)}hr : ${format(min)}min : ${format(sec)}sec`;
        }
    }, 1000)
}

function format(t) {
    return t < 10 ? `0${t}` : t;
}

startCountdown();


