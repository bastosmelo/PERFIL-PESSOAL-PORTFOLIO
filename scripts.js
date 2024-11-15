document.getElementById("contact-form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let hasError = false;

  if (name === "") {
    document.querySelector("#name + .error-message").style.display = "block";
    hasError = true;
  } else {
    document.querySelector("#name + .error-message").style.display = "none";
  }

  if (!emailPattern.test(email)) {
    document.querySelector("#email + .error-message").style.display = "block";
    hasError = true;
  } else {
    document.querySelector("#email + .error-message").style.display = "none";
  }

  if (message === "") {
    document.querySelector("#message + .error-message").style.display = "block";
    hasError = true;
  } else {
    document.querySelector("#message + .error-message").style.display = "none";
  }

  if (hasError) {
    event.preventDefault();
  }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
});

// Mostrar o botão "Topo" após clicar em um item do menu
const menuItems = document.querySelectorAll('.nav a');
const backToTop = document.getElementById('back-to-top');

// Mostrar o botão "Topo" ao clicar em qualquer item do menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    backToTop.style.display = 'block';
  });
});

// Voltar ao topo ao clicar no botão
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ocultar o botão "Topo" ao rolar até o topo
window.addEventListener('scroll', () => {
  if (window.pageYOffset === 0) {
    backToTop.style.display = 'none';
  }
});

