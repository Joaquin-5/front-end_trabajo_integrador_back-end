/**
 * * Selección de los campos del formulario
 */
/**
 * * Campos del usuario
 */
const form = document.querySelector("form");
const firstName = document.getElementById("nombre");
const lastname = document.getElementById("apellido");
const dni = document.getElementById("dni");

/**
 * * Campos del domicilio
 */
const street = document.getElementById("calle");
const number = document.getElementById("numero");
const ubiety = document.getElementById("localidad");
const province = document.getElementById("provincia");

const mensajesDeError = document.getElementById("mensajes-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validInputs();
  showMessages(validInputs());
  if (validInputs().length < 1) {
    const data = {
      nombre: firstName.value,
      apellido: lastname.value,
      dni: dni.value,
      domicilio: {
        calle: street.value,
        numero: number.value,
        localidad: ubiety.value,
        provincia: province.value
      },
    };
    console.log(data);
    registrar("pacientes", data);
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
  if (dni.value < 1) {
    errorMessages.push("El DNI no puede estar vacío");
  }
  if (street.value < 1) {
    errorMessages.push("La calle no puede estar vacía");
  }
  if (number.value < 1) {
    errorMessages.push("El número no puede estar vacío");
  }
  if (ubiety.value < 1) {
    errorMessages.push("La localidad no puede estar vacía");
  }
  if (province.value < 1) {
    errorMessages.push("La provincia no puede estar vacía");
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
