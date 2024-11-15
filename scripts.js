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

