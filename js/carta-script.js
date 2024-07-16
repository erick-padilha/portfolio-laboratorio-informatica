function visualizarCarta(caminho) {
  window.open(caminho, "_blank");
}

function baixarCarta(caminho) {
  $("#passwordModal").modal("show");

  document
    .getElementById("passwordForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const password = document.getElementById("password").value;
      const correctPassword = "1234"; // Substitua 'sua_senha' pela senha correta

      if (password === correctPassword) {
        const link = document.createElement("a");
        link.href = caminho;
        link.download = caminho.split("/").pop();
        link.click();
        $("#passwordModal").modal("hide");
      } else {
        alert("Senha incorreta!");
      }
    });
}
