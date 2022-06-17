
const character = document.querySelectorAll('.character')
const selected2 = document.getElementById(character2);
const imagePlayer1 = document.getElementById('character-player-1');
const imagePlayer2 = document.getElementById('character-player-2');
const namePlayer1 = document.getElementById('name-player-1');
const namePlayer2 = document.getElementById('name-player-2');

namePlayer1.textContent = characters.char1
namePlayer2.textContent = characters[character2];
imagePlayer1.src = `./src/img/${characters.char1}.png`
imagePlayer2.src = `./src/img/${characters[character2]}.png`;
selected2.classList.add('player-2-selected');

var modif = 1;

    character.forEach((char) => {
        char.addEventListener('click', () => {modif === 1 ? modif = 2 : modif = 1;})
        char.addEventListener('mouseenter', () => {
            const idSelected = char.attributes.id.value;
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
        })
    })

const images = document.querySelectorAll('.tableImg')
images.forEach((image) => {
    image.src = `./src/img/${characters[image.parentNode.id]}.jpg`;
})
