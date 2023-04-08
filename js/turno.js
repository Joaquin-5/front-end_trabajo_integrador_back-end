window.addEventListener("load", () => {
  const dependencias = ["odontologos", "pacientes"];

  const odontologos = document.getElementById("odontologos");
  const pacientes = document.getElementById("pacientes");

  const responseOdontologos = async (dependencias, odontologos) => {
    const response = await obtenerTodos(dependencias[0]);
    response.forEach((o) => {
      odontologos.innerHTML += `<option value="${o.id}">${o.nombre} ${o.apellido}</option>`;
    });
  };

  responseOdontologos(dependencias, odontologos);

  const responsePacientes = async (dependencias, pacientes) => {
    const response = await obtenerTodos(dependencias[1]);
    response.forEach((p) => {
      pacientes.innerHTML += `<option value="${p.id}">${p.nombre} ${p.apellido}</option>`;
    });
  };

  responsePacientes(dependencias, pacientes);

  const form = document.querySelector("form");
  const dateTime = document.getElementById("fechaHora");
  const dentist = document.getElementById("odontologos");
  const patient = document.getElementById("pacientes");

  const mensajesDeError = document.getElementById("mensajes-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validInputs();
    showMessages(validInputs());
    if (validInputs().length < 1) {
      const data = {
        fecha: dateTime.value,
        odontologo: { id: dentist.value },
        paciente: { id: patient.value },
      };

      console.log(dateTime.value);

      registrar("turnos", data);      
    }
  });

  const validInputs = () => {
    let errorMessages = [];
    if (dateTime.value === "") {
      errorMessages.push("Debe seleccionar una fecha");
    }
    if (odontologos.value === "") {
      errorMessages.push("Seleccione un odontólogo");
    }
    if (pacientes.value === "") {
      errorMessages.push("Seleccione un paciente");
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
});
