document.getElementById("contact-form").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    alert("Por favor, preencha todos os campos.");
    event.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    event.preventDefault();
  }
});