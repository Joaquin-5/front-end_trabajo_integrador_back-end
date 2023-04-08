window.addEventListener("load", () => {
  const dependencias = ["pacientes", "odontologos", "turnos"];

  const odontologos = document.getElementById("odontologos");
  const pacientes = document.getElementById("pacientes");
  const turnos = document.getElementById("turnos");

  const responseOdontologos = async (dependencias, html) => {
    const response = await obtenerTodos(dependencias[1]);
    response.forEach((o, i) => {
      html.innerHTML += `<div class="card">
      <div class="card-header">Odontólogo ${i+1}</div>
      <div class="card-body">
        <div>
          <span class="label">Nombre:</span><span class="value">${o.nombre}</span>
        </div>
        <div>
          <span class="label">Apellido:</span
          ><span class="value">${o.apellido}</span>
        </div>
        <div>
          <span class="label">Matricula:</span
          ><span class="value">${o.matricula}</span>
        </div>
        <button class="btn-update">Actualizar</button>
        <button class="btn-delete">Eliminar</button>
      </div>
    </div>`;
    });
  };

  responseOdontologos(dependencias, odontologos);

  const responsePacientes = async (dependencias, html) => {
    const response = await obtenerTodos(dependencias[0]);
    response.forEach((p, i) => {
      html.innerHTML += `<div class="card">
      <div class="card-header">Paciente ${i+1}</div>
      <div class="card-body">
        <div>
          <span class="label">Nombre:</span><span class="value">${p.nombre}</span>
        </div>
        <div>
          <span class="label">Apellido:</span
          ><span class="value">${p.apellido}</span>
        </div>
        <div>
          <span class="label">DNI:</span><span class="value">${p.dni}</span>
        </div>
        <div>
          <span class="label">Calle:</span
          ><span class="value">${p.domicilio.calle}</span>
        </div>
        <div>
          <span class="label">Número:</span><span class="value">${p.domicilio.numero}</span>
        </div>
        <div>
          <span class="label">Localidad:</span
          ><span class="value">${p.domicilio.localidad}</span>
        </div>
        <div>
          <span class="label">Provincia:</span
          ><span class="value">${p.domicilio.provincia}</span>
        </div>
        <button class="btn-update">Actualizar</button>
        <button class="btn-delete">Eliminar</button>
      </div>`
    });
  };

  responsePacientes(dependencias, pacientes);

  const responseTurnos = async (dependencias, html) => {
    const response = await obtenerTodos(dependencias[2]);
    response.forEach((t, i) => {
      html.innerHTML += `<div class="card">
      <div class="card-header">Turno ${i+1}</div>
      <div class="card-body">
        <div>
          <span class="label">Fecha del turno:</span
          ><span class="value">${t.fecha}</span>
        </div>
        <div>
          <span class="label">Odontólogo: </span
          ><span class="value">${t.odontologo.nombre} ${t.odontologo.apellido}</span>
        </div>
        <div>
          <span class="label">Paciente:</span
          ><span class="value">${t.paciente.nombre} ${t.paciente.apellido}</span>
        </div>
        <button class="btn-update">Actualizar</button>
        <button class="btn-delete">Eliminar</button>
      </div>
    </div>`
    });
  };

  responseTurnos(dependencias, turnos);
});
