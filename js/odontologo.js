window.addEventListener("load", () => {
  /**
   * * Selección de los campos del formulario
   */
  const form = document.querySelector("form");
  const name = document.getElementById("nombre");
  const lastname = document.getElementById("apellido");
  const tuiton = document.getElementById("matricula");

  const mensajesDeError = document.getElementById("mensajes-error");

  const url = "http://localhost:8080/odontologos";

  const data = {
    nombre: name,
    apellido: lastname,
    matricula: tuiton,
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validInputs();
    showMessages(validInputs());
    postOdontologo(validInputs());
  });

  const validInputs = () => {
    let errorMessages = [];
    if (name.value < 1) {
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

  /**
   * * POST del odontólogo. Se hace el registro del odontólogo
   */
  const postOdontologo = (arrayMessages, url, data) => {
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
   * * GET de los odontólogos. Se obtienen todos los odontólogos
   */
  const obtenerOdontologos = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  /**
   * * GET de un odontólogo. Obtener odontólogo por su id
   */
  const obtenerOdontologo = (url, id) => {
    fetch(`${url}/${id}`)
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
   * * PUT de un odontólogo. Actualizar un odontólogo por su id
   */
  const actualizarOdontologo = (url, id, data) => {
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
   * * DELETE de un odontólogo. Se elimina un odontólogo por su id
   */
  const elimianrOdontologo = (url, id) => {
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
  }
});
