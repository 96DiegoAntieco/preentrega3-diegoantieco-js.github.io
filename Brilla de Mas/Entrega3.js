import jQuery from "jquery";
import "./style.css";

Object.assign(window, {
  $: jQuery,
  jQuery,
});

const formulario = document.getElementById("miFormulario");

// Objeto  servicios de limpieza
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
    nombre: "siilon 3 cuerpos",
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

  // crear un objeto con los dats
  const datos = {
    nombre: nombre,
    domicilio: domicilio,
    telefono: telefono,
    email: email,
    servicio: servicio,
  };

  // uardar datos en LocalStorage
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
if (datosGuardados) {
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
