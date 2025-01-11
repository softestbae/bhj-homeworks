let holeAny = document.getElementById('hole');
let hit = document.getElementById('dead');
let miss = document.getElementById('lost');
let holes = [];

for(let i = 1; i < 10; i += 1) {
    holes.push(document.getElementById('hole[i]'));
    holeAny[i].onclick = function() {
        if(holeAny[i].className.includes('hole_has-mole')) {
            parseInt(hit.texContent)++;
            if(parseInt(hit.texContent) < 10 & parseInt(miss.textContent) < 5) {
                return;
            }
            else if(parseInt(hit.texContent) === 10) {
                alert('Победа!');
            }
            else if(parseInt(miss.textContent) === 5) {
                alert('Проигрыш!');
            }
            parseInt(hit.texContent) = 0;
            parseInt(miss.textContent) = 0;
        }
        else parseInt(miss.textContent)++;
    }
}