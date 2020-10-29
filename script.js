const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
const days = document.getElementById('days');
const endScreen = document.getElementById('endScreen');

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