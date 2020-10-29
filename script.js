const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
const days = document.getElementById('days');
const endScreen = document.getElementById('endScreen');

daysLeft = 60;
gameOverNumber = 15;
loopPlay = false;

function start() {
    count = 0;
    getFaster=6000;
    daysRemaining = daysLeft;

    canvas.innerHTML='';
    score.innerHTML = count;
    days.innerHTML = daysRemaining;

    // Etre sur que la boucle several time 
    loopPlay ? '' : game();
    loopPlay = true;

    function game() {
        let randomTime = Math.round( Math.random() * getFaster);
        getFaster > 700 ? getFaster = (getFaster*0.90): '';

        setTimeout( () => {
            if ( daysRemaining === 0 ) {
                youWin();
            } else if ( canvas.childElementCount < gameOverNumber ){
                console.log(canvas.childElementCount);
                console.log(gameOverNumber );
                virusPop();
                game();
            } else {
                gameOver();
            }
        }, randomTime);
    }

    const gameOver = () => {
        endScreen.innerHTML = `<div class="gameOver">Game over <br/> score : ${count} </div>`;
        endScreen.style.visibility = 'visible';
        endScreen.style.opacity = '1';
        loopPlay = false;
    };
    const youWin = () => {
        let accuracy = Math.round(count / daysLeft *100);
        endScreen.innerHTML = `<div class="youWin"> WIN - Bravo ! <br/>  <span> précision : ${accuracy}% </span></div>`;
        endScreen.style.visibility = 'visible';
        endScreen.style.opacity = '1';
        loopPlay = false;
    }
}

virusPop();

function virusPop() {
    let virus = new Image();
    virus.src = './media/basic-pics/pngwave.png';

    virus.classList.add('virus'); //ajout class="virus"
    virus.style.top = Math.random() * 500 +'px'; //Spawn random X
    virus.style.left = Math.random() * 500 +'px';//Spanw random Y
    let x, y;
    x = y =( Math.random()*45)+30; // x-y doivent faire au moins +30px pour les voir
    virus.style.setProperty('--x', `${x}px`); //set variable pour le scss
    virus.style.setProperty('--y', `${y}px`); //set variable pour le scss

    let plusMinus = Math.random() < 0.5 ? -1 : +1; //Savoir si + ou - 0
    let trX = Math.random() * 500 * plusMinus; //Trajet random X
    let trY = Math.random() * 500 * plusMinus; //Trajet random Y

    virus.style.setProperty('--trX', `${trX}%`); //set variable scss
    virus.style.setProperty('--trY', `${trY}%`); //set variable scss
    
    canvas.appendChild(virus); //Virus enfant de canvas 
}

// REMOVE ELEMENT ON CLICK
document.addEventListener('click', function (e) {
     let targetElement = e.target || e.srcElement;

     if ( targetElement.classList.contains('virus') ) {
         targetElement.remove();
         count++
         score.innerHTML= count;
     }
});

// Countdown Click
canvas.addEventListener('click', () => {
    if (daysRemaining > 0) {
        daysRemaining--;
        days.innerHTML = daysRemaining;
    }
});

endScreen.addEventListener('click', () => {
    setTimeout( () => {
        start();
        endScreen.style.opacity = '0';
        endScreen.style.visibility = 'hidden';
    },3500)
})