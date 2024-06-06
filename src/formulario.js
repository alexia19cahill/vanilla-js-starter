import { verTareas, guardarTareas } from "./index.js";

const btn = document.querySelector(".btn");
const father = document.getElementById("father");
const quitar = document.querySelector(".quitar");
let tareas = document.getElementById("tareas");

promesaCumplida();

async function promesaCumplida() {
  let promesaCumplidas = await verTareas();
  for (let x = 0; x < promesaCumplidas.length; x++) {
    console.log("prueba", promesaCumplidas[x]);

    let cuadro = document.createElement("div");
    cuadro.id = "cuadro";
    father.appendChild(cuadro);

    let checkox = document.createElement("input");
    checkox.type = "checkbox";
    cuadro.appendChild(checkox);

    let h3 = document.createElement("h3")
 
    // cuadro.appendChild(spaceText);
    h3.innerHTML = promesaCumplidas[x].task;

    cuadro.appendChild(h3)


  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.getElementById("input");


  const text = input.value;

  if (text !== "") {
    let cuadro = document.createElement("div");
    cuadro.id = "cuadro";
    father.appendChild(cuadro);

    let checkox = document.createElement("input");
    checkox.type = "checkbox";
    cuadro.appendChild(checkox);

    let h3 = document.createElement("h3")
 
    // cuadro.appendChild(spaceText);
    h3.innerHTML = input.value;

    cuadro.appendChild(h3)

     let botonEliminar = document.createElement("button");
      botonEliminar.id = "botonEliminar"

   
    guardarTareas(input.value);

    input.value = "";
    quitar.style.display = "none";

  
    
  }
});
