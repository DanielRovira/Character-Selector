
const personagens = document.querySelectorAll('.personagem')
document.getElementById('nome-jogador-1').textContent = character.char1
document.getElementById('personagem-jogador-1').src = `./src/imagens/${character.char1}.png`

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        const personagemSelecionado = document.querySelector('.selecionado');
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        nomeJogador1.textContent = character[idSelecionado];
        imagemJogador1.src = `./src/imagens/${character[idSelecionado]}.png`;
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
    });
    
    const imagemJogador2 = document.getElementById('personagem-jogador-2');
    const nomeJogador2 = document.getElementById('nome-jogador-2');
    const selecionado2 = document.getElementById(personagem2);
    nomeJogador2.textContent = character[personagem2];
    imagemJogador2.src = `./src/imagens/${character[personagem2]}.png`;
    selecionado2.classList.add('jogador-2-selecionado');
});


const images = document.querySelectorAll('.tableImg')
images.forEach((image) => {
    image.src = `./src/imagens/${character[image.parentNode.id]}.jpg`;
})
