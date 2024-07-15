document.getElementById('printForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = '1234abc'; // Substitua 'sua_senha' pela senha correta

    if (password === correctPassword) {
        window.print();
    } else {
        alert('Senha incorreta!');
    }
});