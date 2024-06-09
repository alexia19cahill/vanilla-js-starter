import { verTareas, guardarTareas, deleteTask } from "./index.js";
// para  importar desde la carpeta de index.js 

const btn = document.querySelector(".btn");
// se llama por id el boton y el input,y el espacio de texto
const father = document.getElementById("father");
const quitar = document.querySelector(".quitar");
let tareas = document.getElementById("tareas");

promesaCumplida();
// se crea funcion asincrona la cual la cual queda en espera con el await hasta que promesascumplidas se cumpla 
async function promesaCumplida() {
  let promesaCumplidas = await verTareas();
  console.log(promesaCumplidas, "promesas");
  for (let x = 0; x < promesaCumplidas.length; x++) {
    // console.log("prueba", promesaCumplidas[x]);


    // se crean todos los elementos 
    let cuadro = document.createElement("div");
    cuadro.id = "cuadro";
    father.appendChild(cuadro);

    let checkox = document.createElement("input");
    checkox.type = "checkbox";
    cuadro.appendChild(checkox);
    checkox.id = "check";

    let h3 = document.createElement("h3");

    // cuadro.appendChild(spaceText);
    h3.innerHTML = promesaCumplidas[x].task;

    cuadro.appendChild(h3);

    
    // se crea boton de eliminar las tareas,y se crea funcion con evento onclick el cual eliminará por medio del id guardado en el api
   
    const deleteboton = document.createElement("button");
    deleteboton.innerText = "🗑️";
    deleteboton.id = "eliminar";
    deleteboton.className = "deleteboton";
    deleteboton.onclick = function () {
      console.log("presionado", promesaCumplidas[x].id);
      deleteTask(promesaCumplidas[x].id);
      cuadro.remove();
    };

    cuadro.appendChild(deleteboton);
  }
}

 // función con evento keypress para enviar el valor del input con la tecla enter 
 
const input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter" && input.value != "") {
    // console.log("se presiono enter", input.value);
    guardarTareas(input.value);
    location.reload();
  }
});

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    guardarTareas(input.value);
    location.reload();
    //crear funcion de elementos vs cargados delservidor
    let tareasGuardadas = await verTareas(input.value);
  
  
  
    let task = tareasGuardadas.at(-1);
    let cuadro = document.createElement("div");
    cuadro.id = "cuadro";
    father.appendChild(cuadro);

    let checkox = document.createElement("input");
    checkox.type = "checkbox";
    checkox.id = "check";
    cuadro.appendChild(checkox);

    let h3 = document.createElement("h3");

    console.log(checkox);
    // cuadro.appendChild(spaceText);
    h3.innerHTML = input.value;

    cuadro.appendChild(h3);

    const deleteboton = document.createElement("button");
    deleteboton.innerText = "🗑️";
    deleteboton.className = "deleteboton";
    deleteboton.onclick = function () {
      deleteTask(task.id);
      cuadro.remove();
    };

    cuadro.appendChild(deleteboton);

    input.value = "";
    quitar.style.display = "none";
  }
});

