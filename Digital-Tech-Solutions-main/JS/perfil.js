 document.getElementById("accountForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  console.log("Dados salvos:");
  console.log("Nome:", firstName);
  console.log("Sobrenome:", lastName);
  console.log("Email:", email);
  console.log("Telefone:", phone);

  alert("Informações salvas com sucesso!");
});