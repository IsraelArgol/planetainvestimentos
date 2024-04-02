function validarEntrada(input) {
    var valor = parseFloat(input.value.replace("R$", "").replace(/\s/g, "").replace(/\./g, "").replace(",", "."));
    if (isNaN(valor) || valor < 1500.00) {
        alert("O valor mínimo é de R$ 1.500,00");
        input.value = "1.500,00";
    }
}

function validarFormulario() {
    var entrada = document.getElementById("form").querySelector("[name=entrada]");
    var valor = parseFloat(entrada.value.replace("R$", "").replace(/\s/g, "").replace(/\./g, "").replace(",", "."));
    if (isNaN(valor) || valor < 1500.00) {
        alert("O valor mínimo é de R$ 1.500,00");
        entrada.value = "1.500,00";
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".popular__button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var veiculo = button.closest('.popular__card').querySelector('.popular__subtitle').textContent;
            console.log("Nome do veículo:", veiculo); // Adiciona log para verificar o nome do veículo
            localStorage.setItem('veiculo', veiculo); // Armazena o veículo no localStorage
            console.log("Veículo armazenado no localStorage:", localStorage.getItem('veiculo')); // Adiciona log para verificar se o veículo está sendo armazenado corretamente
            document.getElementById('modeloInteresse').value = veiculo; // Atualiza o valor do campo "Veículo de Interesse"
            console.log("Valor do campo 'Veículo de Interesse' atualizado para:", veiculo); // Adiciona log para verificar se o campo é atualizado corretamente
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o campo de CPF
    const cpfInput = document.getElementById('cpf');

    // Adiciona um listener para formatar o CPF enquanto o usuário digita
    cpfInput.addEventListener('input', function() {
        let cpf = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (cpf.length > 0) {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a formatação 000.000.000-00
        }
        cpfInput.value = cpf;
    });
});

