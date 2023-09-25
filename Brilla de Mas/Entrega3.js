const formulario = document.getElementById("miFormulario");

// Objeto  servicios de limpieza
const serviciosLimpieza = {
  colchon1plaza: {
    id: 1,
    nombre: "colchon 1 plaza",
    precio: 6000,
    aDomicilio: true,
  },
  colchonplazas: {
    id: 2,
    nombre: "colchon 2 plazas",
    precio: 8500,
    aDomicilio: true,
  },
  lsillon2cuerpos: {
    id: 3,
    nombre: "sillon 2 cuerpos",
    precio: 8000,
    aDomicilio: true,
  },
  sillon3cuerpos: {
    id: 4,
    nombre: "siilon 3 cuerpos",
    precio: 11000,
    aDomicilio: true,
  },
  vehiculo5asientos: {
    id: 5,
    nombre: "Vehiculo 5 asientos",
    precio: 9500,
    aDomicilio: false,
  },
  vehiculo7asientos: {
    id: "6",
    nombre: "Vehiculo 7 asientos",
    precio: 1200,
    aDomicilio: false,
  },
};

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const domicilio = document.getElementById("domicilio").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const servicio = document.getElementById("servicio").value;

  if (!nombre || !domicilio || !telefono || !email) {
    alert("Por favor, complete todos los campos y seleccione una cantidad.");
    return;
  }

  if (!serviciosLimpieza[servicio]) {
    alert("Por favor, seleccione un servicio válido.");
    return;
  }

  // Validacion del campo numero de teléfono
  if (!/^\d+$/.test(telefono)) {
    return;
  }
  if (nombre.length < 4) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El nombre de usuario es muy corto. Indentifiquese con nombre completo.",
    });
    return;
  }
  if (domicilio.length < 15) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, sea mas especifico al escribir su direccion.",
    });
    return;
  }
  if (telefono.length !== 10) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, verifique su numero de telefono. Solo puede colocar numero celular con el numero de area.",
    });
    return;
  }
  if (email.length > 100) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, verifique la longitud de los email.",
    });
    return;
  }

  // un objeto con los dats
  const datos = {
    nombre: nombre,
    domicilio: domicilio,
    telefono: telefono,
    email: email,
    servicio: servicio,
    mostrados: false,
  };

  // guardar datos en LocalStorage
  localStorage.setItem("datosUsuario", JSON.stringify(datos));

  alert("Datos guardados correctamente en LocalStorage.");

  // Limpiar el formulario
  formulario.submit();
});

// Obtener los datos almacenados en LocalStorage
const datosGuardados = JSON.parse(localStorage.getItem("datosUsuario"));

// Obtener el elemento HTML donde se muestran los datos
const datosMostrados = document.getElementById("datosMostrados");

// Verificar si hay datos guardados
if (datosGuardados && !datosGuardados.mostrados) {
  const datos = { mostrados: true };
  localStorage.setItem("datosUsuario", JSON.stringify(datos));
  //mensaje para mostrar los datos
  const mensaje = `
        <h2>Datos ingresados por el usuario:</h2>
        <p><strong>Nombre:</strong> ${datosGuardados.nombre}</p>
        <p><strong>Dirección:</strong> ${datosGuardados.domicilio}</p>
        <p><strong>Teléfono:</strong> ${datosGuardados.telefono}</p>
        <p><strong>Email:</strong> ${datosGuardados.email}</p>
        <p><strong>Servicio elegido:</strong> ${datosGuardados.servicio}</p>
      `;

  // Mostrar el mensaje en el elemento HTML
  datosMostrados.innerHTML = mensaje;
}
