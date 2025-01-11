const timerToEnding = document.getElementById('timer');

const id = setInterval( () => {
    if (timerToEnding.textContent > 0) {
        timerToEnding.textContent -= 1;
    }
    else if (timerToEnding.textContent == 0) {
        clearInterval(id);
        alert('Вы победили в конкурсе!');
    }
}, 1000);