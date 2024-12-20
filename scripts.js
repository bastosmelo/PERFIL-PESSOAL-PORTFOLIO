// Seleciona o botão "Voltar ao Topo"
const backToTop = document.getElementById("back-to-top");

// Mostra ou oculta o botão com base na rolagem
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTop.style.display = "block"; // Exibe o botão quando o scroll ultrapassa 100px
  } else {
    backToTop.style.display = "none"; // Oculta o botão quando está no topo
  }
});

// Adiciona o evento de clique para rolar suavemente para o topo
backToTop.addEventListener("click", (event) => {
  event.preventDefault(); // Evita o comportamento padrão do link
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Rola suavemente para o topo
  });
});

// Seleciona o botão "menu-toggle" e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Adiciona um evento de clique ao botão
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // Alterna a classe 'active' no menu
});
