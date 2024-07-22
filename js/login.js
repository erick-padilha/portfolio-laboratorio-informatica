document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Armazenamento simples de credenciais (substitua isso por uma lógica de armazenamento seguro)
    var users = {
        "user1": "password1",
        "user2": "password2",
        "educando": "senha123"
        // Adicione mais usuários e senhas conforme necessário
    };

    if (users[username] && users[username] === password) {
        // Armazenar autenticação em sessionStorage
        sessionStorage.setItem("authenticated", "true");
        // Redireciona para a página principal após login bem-sucedido
        window.location.href = "index.html";
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
});
