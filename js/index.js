window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const errores = document.getElementById("mensajes-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validInputs();
    showMessages(validInputs());
    logUser(validInputs());
  });

  const validInputs = () => {
    let mensajesDeError = [];

    if (username.value < 1) {
      mensajesDeError.push("El nombre de usuario no puede estar vacío");
    }
    if (password.value < 1) {
      mensajesDeError.push("La contraseña no puede estar vacía");
    }

    return mensajesDeError;
  };

  const showMessages = (errorMessages) => {
    if(errores.hasChildNodes()) {
      errores.textContent = '';
      errorMessages.forEach((message) => {
        errores.innerHTML += `<p>${message}</p>`;
      });
    } else {
      errorMessages.forEach((message) => {
        errores.innerHTML += `<p>${message}</p>`;
      });
    }
  };

  const logUser = (arrayMensajes) => {
    if(arrayMensajes.length === 0) {
      const data = {
        username: username,
        password: password
      }

      
    }
    return;
  }
});
