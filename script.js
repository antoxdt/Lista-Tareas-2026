/* Referencias al documento del DOM */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");

/* Función para crear el elemento tarea (función nodo) */

function crearElementoTarea () {
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
    iconoEliminar.classList.add("bi", "bi-trash3");

    tareaTexto.innerText = tareaEntrada.value;

    return tareaContenedor;
}

/* Escuchador */
botonAgregar.addEventListener("click", agregarTarea);

/* Función agregar el elemento tarea */

function agregarTarea(){
    // Traemos el elemento retornado por la función crearElementoTarea
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);



    //Reiniciar valor del input
    tareaEntrada.value="";
}

