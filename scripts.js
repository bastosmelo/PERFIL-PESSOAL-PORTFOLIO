

// Função para validar o formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      event.preventDefault(); // Impede o envio do formulário
    }
  });
  
  // Função para inicializar o Google Maps
  function initMap() {
    const location = { lat: -23.55052, lng: -46.633308 }; // Coordenadas do local
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: location
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }