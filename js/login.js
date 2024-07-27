document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Armazenamento simples de credenciais (substitua isso por uma lógica de armazenamento seguro)
    var users = {
        "Arthur": "Art12345",
        "Joao": "Joao2024",
        "Luan": "Luan5678",
        "Luka": "Luka1234",
        "Nicolle": "Nic2024",
        "Ryan": "Ryan5678",
        "Sarah": "Sar12345",
        "Simeao": "Sim12345",
        "Shayera": "Sha5678",
        "Brendo": "Bre2024",
        "Emilly": "Emi5678",
        "Erick": "Eri12345",
        "Erika": "Eri2024",
        "Frank": "Fra5678",
        "Gionava": "Gio12345",
        "Guilherme": "Gui2024",
        "Isadora": "Isa5678",
        "Luciano": "Luc12345",
        "Luigi": "Lui2024",
        "Miguel": "Mig5678",
        "Rai": "Rai12345",
        "Ruti": "Rut2024",
        "Sthefany": "Sth5678",
        "Victorya": "Vic12345",
        "Yuri": "Yur2024",
        "Educador": "TEC@1873"
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
