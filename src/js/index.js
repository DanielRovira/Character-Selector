
const personagens = document.querySelectorAll('.personagem')
document.getElementById('nome-jogador-1').textContent = char1
document.getElementById('nome-jogador-2').textContent = char6
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
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')
    });
});
