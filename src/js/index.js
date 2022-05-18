
const personagens = document.querySelectorAll('.personagem')
document.getElementById('nome-jogador-1').textContent = char1
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        const personagemSelecionado = document.querySelector('.selecionado');
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        idSelecionado === "char1" ? nomeJogador1.textContent = char1 : 
        (idSelecionado === "char2" ? nomeJogador1.textContent = char2 : 
        (idSelecionado === "char3" ? nomeJogador1.textContent = char3 : 
        (idSelecionado === "char4" ? nomeJogador1.textContent = char4 : 
        (idSelecionado === "char5" ? nomeJogador1.textContent = char5 : 
        (idSelecionado === "char6" ? nomeJogador1.textContent = char6 : 
        (idSelecionado === "char7" ? nomeJogador1.textContent = char7 : 
        (idSelecionado === "char8" ? nomeJogador1.textContent = char8 : 
        nomeJogador1.textContent = char9)))))));
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
    });
    const imagemJogador2 = document.getElementById('personagem-jogador-2');
    const nomeJogador2 = document.getElementById('nome-jogador-2');
    const selecionado2 = document.getElementById(personagem2);
    nomeJogador2.textContent = personagem2;
    imagemJogador2.src = `./src/imagens/${personagem2}.png`;
    selecionado2.classList.add('jogador-2-selecionado');
    personagem2 === "char1" ? nomeJogador2.textContent = char1 : 
    (personagem2 === "char2" ? nomeJogador2.textContent = char2 : 
    (personagem2 === "char3" ? nomeJogador2.textContent = char3 : 
    (personagem2 === "char4" ? nomeJogador2.textContent = char4 : 
    (personagem2 === "char5" ? nomeJogador2.textContent = char5 : 
    (personagem2 === "char6" ? nomeJogador2.textContent = char6 : 
    (personagem2 === "char7" ? nomeJogador2.textContent = char7 : 
    (personagem2 === "char8" ? nomeJogador2.textContent = char8 : 
    nomeJogador2.textContent = char9)))))));
});
