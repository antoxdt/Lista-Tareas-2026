/* Referencias al documento del DOM */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");
const contadorTotales = document.getElementById("contadorTotales");
const contenedorTerminadas =document.getElementById("contenedorTerminadas");



/* Función para crear elemento tarea (Función creadora del nodo Tarea) */
function crearElementoTarea() {

  // Crear los elementos html de la tarea
  const tareaContenedor = document.createElement("div");
  const tareaTexto = document.createElement("p");
  const iconosContenedor = document.createElement("div");
  const iconoCompletada = document.createElement("i");
  const iconoEliminar = document.createElement("i");

  // Creamos la estructura de la tarea
  iconosContenedor.append(iconoCompletada, iconoEliminar);
  tareaContenedor.append(tareaTexto, iconosContenedor);

  // Agregamos las clases a los elementos de la tarea
  tareaContenedor.classList.add("tarea");
  tareaTexto.classList.add("tarea-texto");
  iconosContenedor.classList.add("tarea-iconos");
  iconoCompletada.classList.add("bi", "bi-check-circle");
  iconoEliminar.classList.add("bi", "bi-trash2");

  // Agregamos el texto del usuario
  tareaTexto.innerText = tareaEntrada.value;

  // Escuchadores de los iconos
  iconoCompletada.addEventListener("click", (e) => {
    const tareaElemento = e.target.parentNode.parentNode;
    const esCompletada = tareaElemento.classList.contains("tarea-completada");

    tareaElemento.classList.toggle("tarea-completada");

    if (esCompletada) {
      e.target.classList.remove("bi-dash-circle");
      e.target.classList.add("bi-check-circle");
    } else {
      e.target.classList.remove("bi-check-circle");
      e.target.classList.add("bi-dash-circle");
    }

    //Actualizar los contadores
    actualizarContadores();
  });

  iconoEliminar.addEventListener("click", (e) => {
    const tareaElemento = e.target.parentNode.parentNode;
    tareaElemento.remove();

    //Actualizar los contadores
    actualizarContadores();
  });

  // Retornamos la estructura de la tarea
  return tareaContenedor;
}

/* Funcion Actualizar contenedores */

function actualizarContadores () {
  const tareasTotales = document.querySelectorAll(".tarea");
  const tareasCompletadas = document.querySelectorAll(".tarea-completada");

  contadorTotales.textContent = tareasTotales.length;
  contenedorTerminadas.textContent = tareasCompletadas.length;
}




/* Escuchador Boton*/
botonAgregar.addEventListener("click", agregarTarea);

/* Funcion Agregar el elemento Tarea */
function agregarTarea() {

  const texto = tareaEntrada.value.trim();

  if (texto) {

    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);

    tareaEntrada.value = "";

    //Moatrar el mensaje de tarea creada satisfactoriamente
    mensaje.textContent = "¡Tarea creada satisfactoriamente! 🤗";

    // actualizamos los contadores
    actualizarContadores();

  } else {

    mensaje.textContent = "¡No escribiste nada! 🥵";
  }
}

/* Hacemos que al presionar la tecla Enter en el Input se agregue la tarea */

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    agregarTarea();
  }
});

/* Mostrar el mensaje al escribir */

tareaEntrada.addEventListener("input", () => {

  if (tareaEntrada.value.trim() === "") {
    mensaje.textContent = "¡Escribe tu proxima tarea! 😎";
  } else {
    mensaje.textContent = "¡Al finalizar presiona Enter! 😼";
  }
});

