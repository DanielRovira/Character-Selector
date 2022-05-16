
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        

        const personagemSelecionado = document.querySelector('.selecionado')
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const dataName = personagem.getAttribute('data-name')
        // if(idSelecionado === 'ultron') return;   // Desativar selecionar mesmo personagem que Player 2
        nomeJogador1.textContent = dataName;
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')
    });
    
});

