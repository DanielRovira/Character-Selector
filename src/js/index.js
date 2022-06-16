
const character = document.querySelectorAll('.character')
const imagePlayer1 = document.getElementById('character-player-1');
const namePlayer1 = document.getElementById('name-player-1');
namePlayer1.textContent = characters.char1
imagePlayer1.src = `./src/img/${characters.char1}.png`

const imagePlayer2 = document.getElementById('character-player-2');
const namePlayer2 = document.getElementById('name-player-2');
const selected2 = document.getElementById(character2);
namePlayer2.textContent = characters[character2];
imagePlayer2.src = `./src/img/${characters[character2]}.png`;
selected2.classList.add('player-2-selected');

character.forEach((char) => {
    char.addEventListener('mouseenter', () => {
        const idSelected = char.attributes.id.value;
        const characterSelected = document.querySelector('.selected');
        namePlayer1.textContent = characters[idSelected];
        imagePlayer1.src = `./src/img/${characters[idSelected]}.png`;
        characterSelected.classList.remove('selected');
        char.classList.add('selected');
    });
});

const images = document.querySelectorAll('.tableImg')
images.forEach((image) => {
    image.src = `./src/img/${characters[image.parentNode.id]}.jpg`;
})
