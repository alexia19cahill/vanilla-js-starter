import { verTareas,guardarTareas } from "./index.js";


const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const father = document.getElementById("father");
const quitar = document.querySelector(".quitar");

let tareas = document.getElementById("tareas");

promesaCumplida();

async function promesaCumplida() {
  let promesaCumplidas = await verTareas();
  for (let x = 0; x < promesaCumplidas.length; x++) {
    console.log("ver", promesaCumplidas[x]);
  }





}


btn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    let cuadro = document.createElement("div");
    cuadro.id = "cuadro";
    father.appendChild(cuadro);

    let checkox = document.createElement("input");
    checkox.type = "checkbox";
    cuadro.appendChild(checkox);

    let spaceText = document.createElement("div");
    spaceText.id = "spaceText";
    // cuadro.appendChild(spaceText);
    spaceText.innerHTML = input.value;

    input.value = "";
    quitar.style.display = "none";

    guardarTareas(text);
  }
});