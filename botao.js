document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe "botaoCarro"
    const botoesCarro = document.querySelectorAll('.botaoCarro');

    // Adiciona um evento de clique a todos os botões
    botoesCarro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Redireciona para o formulário.html
            window.location.href = 'formulario.html';
        });
    });
});
