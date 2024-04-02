function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        // Redirecionar para o Gmail após o login bem-sucedido
        window.location.href = 'https://mail.google.com/';
    } else {
        alert('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
    }
}
