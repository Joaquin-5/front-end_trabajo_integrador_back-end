/**
 * * Selección de los campos del formulario
 */
const form = document.querySelector("form");
const firstName = document.getElementById("nombre");
const lastname = document.getElementById("apellido");
const tuiton = document.getElementById("matricula");

const mensajesDeError = document.getElementById("mensajes-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validInputs();
  showMessages(validInputs());
  if (validInputs().length < 1) {
    const data = {
      nombre: firstName.value,
      apellido: lastname.value,
      matricula: tuiton.value,
    };
    console.log(data);
    const res = registrar("odontologos", data);
    console.log(res);
  }
});

const validInputs = () => {
  let errorMessages = [];
  if (firstName.value < 1) {
    errorMessages.push("El nombre no puede estar vacío");
  }
  if (lastname.value < 1) {
    errorMessages.push("El apellido no puede estar vacío");
  }
  if (tuiton.value < 1) {
    errorMessages.push("La matricula no puede estar vacía");
  }

  return errorMessages;
};

const showMessages = (errorMessages) => {
  if (mensajesDeError.hasChildNodes()) {
    mensajesDeError.textContent = "";
    errorMessages.forEach((message) => {
      mensajesDeError.innerHTML += `<p>${message}</p>`;
    });
  } else {
    errorMessages.forEach((message) => {
      mensajesDeError.innerHTML += `<p>${message}</p>`;
    });
  }
};
