let timerToEnding = document.getElementById('timer');
let counter = timerToEnding.textContent;

let id = setInterval(() => {
    if(counter > 0) {
        counter -= 1;
    }
    else if(counter === 0) {
        clearInterval(id);
        alert('Вы победили в конкурсе!');
    }
}, 1000);
