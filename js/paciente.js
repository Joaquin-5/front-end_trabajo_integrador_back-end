window.addEventListener("load", () => {
  /**
   * * Selección de los campos del formulario
   */
  /**
   * * Campos del usuario
   */
  const form = document.querySelector("form");
  const name = document.getElementById("nombre");
  const lastname = document.getElementById("apellido");
  const dni = document.getElementById("dni");
  const dischargeDate = document.getElementById("fechaDeAlta");

  /**
   * * Campos del domicilio
   */
  const street = document.getElementById("calle");
  const number = document.getElementById("numero");
  const location = document.getElementById("localidad");
  const province = document.getElementById("provincia");

  const mensajesDeError = document.getElementById("mensajes-error");

  const url = "http://localhost:8080/pacientes";

  const data = {
    nombre: name,
    apellido: lastname,
    dni: dni,
    fechaDeAlta: dischargeDate,
    calle: street,
    numero: number,
    localidad: location,
    provincia: province,
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validInputs();
    showMessages(validInputs());
    registrarPaciente(validInputs(), url, data);
  });

  const validInputs = () => {
    let errorMessages = [];

    if (name.value < 1) {
      errorMessages.push("El nombre no puede estar vacío");
    }
    if (lastname.value < 1) {
      errorMessages.push("El apellido no puede estar vacío");
    }
    if (dni.value < 1) {
      errorMessages.push("El DNI no puede estar vacío");
    }
    if (dischargeDate.value < 1) {
      errorMessages.push("La fecha no puede estar vacía");
    }

    if (street.value < 1) {
      errorMessages.push("La calle no puede estar vacía");
    }
    if (number.value < 1) {
      errorMessages.push("El número no puede estar vacío");
    }
    if (location.value < 1) {
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

  const registrarPaciente = (arrayMessages, url, data) => {
    if (arrayMessages.length === 0) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((info) => {
          console.log(info);
        })
        .catch((e) => {
          console.log("Error! " + e);
        });
    }
    return;
  };

  /**
   * * GET de los pacientes. Se obtienen todos los pacientes
   */
  const obtenerPacientes = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'no-cors'
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);
      })
      .catch((e) => {
        console.log("Error! " + e);
      });
  };

  /**
   * * GET de un paciente. Obtener un paciente por su id
   */
  const obtenerPaciente = (url, id) => {
    fetch(`${url}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'no-cors'
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);
      });
  };

  /**
   * * PUT de un paciente. Actualizar un paciente por su id
   */
  const actualizarPaciente = (url, id, data) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);
      })
      .catch((e) => {
        console.log("Error! " + e);
      });
  };

  /**
   * * DELETE de un paciente. Se elimina un paciente por su id
   */
  const eliminarPaciente = (url, id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);
      })
      .catch((e) => {
        console.log("Error! " + e);
      });
  };

  obtenerPacientes(url);
});
