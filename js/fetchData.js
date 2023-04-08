const registrar = async (dependencia, data, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}`;

  try {
    const response = await fetch(urlCompleta, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log("Error! " + e);
  }
};

/* const obtenerTodos = (dependencia, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}`;

  console.log(urlCompleta);

  fetch(urlCompleta)
    .then((response) => {
      console.log(response.json());
      response.json();
    })
    .then((info) => {
      console.log(info);
    })
    .catch((e) => {
      console.log("Error! " + e);
    });
}; */

const obtenerTodos = async (dependencia, url = "http://localhost:8080") => {
  try {
    const response = await fetch(`${url}/${dependencia}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Error! " + e);
  }
};

const obtenerPorId = async (dependencia, id, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}/${id}`;

  try {
    const response = await fetch(urlCompleta);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error! " + e);
  }
};

/* const obtenerPorId = (dependencia, id, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}/${id}`;

  fetch(urlCompleta);
  .then((response) => {
      return response.json();
    })
    .then((info) => {
      console.log(info);
    })
    .catch(e => {
      console.log(e);
    });
}; */

const actualizar = async (dependencia, id, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}/${id}`;

  try {
    const response = await fetch(urlCompleta);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error! " + e);
  }
};

/* const actualizar = (dependencia, id, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}/${id}`;

  fetch(urlCompleta, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  .then((response) => {
      return response.json();
    })
    .then((info) => {
      console.log(info);
    })
    .catch((e) => {
      console.log("Error! " + e);
    });
}; */

const eliminar = async (dependencia, id, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}/${id}`;

  try {
    const response = await fetch(urlCompleta, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      }
    });

    const result = await response.json();
    console.log(result);

    return result;

  } catch (e) {
    console.log("Error! " + e);
  }
};

/* const eliminar = (dependencia, id, url = "http://localhost:8080") => {
  const urlCompleta = `${url}/${dependencia}/${id}`;

  fetch(urlCompleta, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
   .then((response) => {
      return response.json();
    })
    .then((info) => {
      console.log(info);
    })
    .catch((e) => {
      console.log("Error! " + e);
    });
}; */
