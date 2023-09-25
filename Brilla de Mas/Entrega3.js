document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");

  // Objeto servicios de limpieza
  const serviciosLimpieza = {
    limpieza1: {
      id: 1,
      nombre: "colchon 1 plaza",
      precio: 6000,
      aDomicilio: true,
    },
    limpieza2: {
      id: 2,
      nombre: "colchon 2 plazas",
      precio: 8500,
      aDomicilio: true,
    },
    limpieza3: {
      id: 3,
      nombre: "sillon 2 cuerpos",
      precio: 8000,
      aDomicilio: true,
    },
    limpieza4: {
      id: 4,
      nombre: "sillon 3 cuerpos",
      precio: 11000,
      aDomicilio: true,
    },
    limpieza5: {
      id: 5,
      nombre: "Vehiculo 5 asientos",
      precio: 9500,
      aDomicilio: false,
    },
    limpieza6: {
      id: 6,
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

    // Validacion del campo numero de teléfono
    if (!/^\d+$/.test(telefono)) {
      alert("El número de teléfono debe contener solo números.");
      return;
    }

    if (
      nombre.length > 50 ||
      domicilio.length > 100 ||
      telefono.length !== 10 ||
      email.length > 100
    ) {
      alert("Por favor, verifique la longitud de los campos.");
      return;
    }

    const servicio = document.getElementById("servicio").value;

    // objeto con los datos
    const datos = {
      nombre: nombre,
      domicilio: domicilio,
      telefono: telefono,
      email: email,
      servicio: servicio,
    };

    // Guardar datos en LocalStorage
    localStorage.setItem("datosUsuario", JSON.stringify(datos));

    // Limpiar el formulario
    formulario.reset();

    // mensaje en el elemento HTML
    const datosMostrados = document.getElementById("datosMostrados");
    const mensaje = `
        <h2>Datos ingresados por el usuario:</h2>
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Dirección:</strong> ${datos.domicilio}</p>
        <p><strong>Teléfono:</strong> ${datos.telefono}</p>
        <p><strong>Email:</strong> ${datos.email}</p>
        <p><strong>Servicio elegido:</strong> ${datos.servicio}</p>
    `;

    datosMostrados.innerHTML = mensaje;
  });

  // obtener los datos almacenados en LocalStorage
  const datosGuardados = JSON.parse(localStorage.getItem("datosUsuario"));

  // Verificar si hay datos guardados y mostrarlos al cargar la página
  if (datosGuardados) {
    const datosMostrados = document.getElementById("datosMostrados");
    const mensaje = `
        <h2>Datos ingresados por el usuario:</h2>
        <p><strong>Nombre:</strong> ${datosGuardados.nombre}</p>
        <p><strong>Dirección:</strong> ${datosGuardados.domicilio}</p>
        <p><strong>Teléfono:</strong> ${datosGuardados.telefono}</p>
        <p><strong>Email:</strong> ${datosGuardados.email}</p>
        <p><strong>Servicio elegido:</strong> ${datosGuardados.servicio}</p>
    `;

    datosMostrados.innerHTML = mensaje;
  }
});
