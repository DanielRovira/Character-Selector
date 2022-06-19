
const character = document.querySelectorAll('.character')
const selected2 = document.getElementById(character2);
const imagePlayer1 = document.getElementById('character-player-1');
const imagePlayer2 = document.getElementById('character-player-2');
const namePlayer1 = document.getElementById('name-player-1');
const namePlayer2 = document.getElementById('name-player-2');
const images = document.querySelectorAll('.tableImg')
var modif = 1;

namePlayer1.textContent = characters.char1;
namePlayer2.textContent = characters[character2];

character.forEach((char, i) => {
    const idSelected = char.attributes.id.value;
    function initMouseover() {
        const characterSelected = document.querySelector('.selected');
        const characterSelected2 = document.querySelector('.player-2-selected');
        switch (modif) {
        case 1:
            namePlayer1.textContent = characters[idSelected];
            imagePlayer1.src = `./src/img/${characters[idSelected]}.png`;
            characterSelected.classList.remove('selected');
            char.classList.add('selected');
        break;
        case 2:
            namePlayer2.textContent = characters[idSelected];
            imagePlayer2.src = `./src/img/${characters[idSelected]}.png`;
            characterSelected2.classList.remove('player-2-selected');
            char.classList.add('player-2-selected');
        }
    }
    function appear() {modif = 1; document.querySelector('.buttons-container').style.display = 'block'}
    if (matchMedia('(pointer:fine)').matches) {char.addEventListener('mouseover', () => {initMouseover()})}
    else {char.addEventListener('click', () => {initMouseover()})}
    char.addEventListener('click', () => {modif === 1 ? modif = 2 : appear()})
    setTimeout(() => {
    imagePlayer1.src = `./src/img/${characters[idSelected]}.png`;
    }, i * 100)
})

images.forEach((image) => {
    image.src = `./src/img/${characters[image.parentNode.id]}.jpg`;
})

setTimeout(() => {
    imagePlayer1.src = `./src/img/${characters.char1}.png`;
    }, 900)
 
imagePlayer2.src = `./src/img/${characters[character2]}.png`;
selected2.classList.add('player-2-selected');
function start() {setTimeout(() => {
        document.querySelector('.buttons-container').style.display = 'none';
    }, 250);};
function select() {setTimeout(() => {
        document.querySelector('.buttons-container').style.display = 'none';
    }, 250);};

initMouseover();
