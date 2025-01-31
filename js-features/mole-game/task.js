let holeArray = document.getElementsByClassName('hole');
let hit = document.getElementById('dead');
let miss = document.getElementById('lost');

let resertScore = (message) => {
    hit.textContent = 0;
    miss.textContent = 0;
    alert(message);
}

Array.from(holeArray).forEach((element) => {
    element.onclick = () => {
        if(element.className.includes('hole hole_has-mole')) {
            hit.textContent++;
                if(+hit.textContent === 10) {
                    resertScore('Победа!');
                }
        }
        else {
            miss.texContent++;
                if(+miss.textContent === 5) {
                    resertScore('Вы проиграли!');
                }
       }
    }
});