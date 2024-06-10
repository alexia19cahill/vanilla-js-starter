

// funcion para ver tareas
async function verTareas() {
  try {
    const response = await fetch("http://localhost:3000/api/task/");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

// funcion para mostrar las tareas
async function guardarTareas(tareas) {
  try {
    const response = await fetch("http://localhost:3000/api/task/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: tareas,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// verTareas();

export { verTareas, guardarTareas, deleteTask };

// funcion para eliminar las tareas 
function deleteTask(taskId) {
  console.log(taskId);
  fetch(`http://localhost:3000/api/task/${taskId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al eliminar la tarea");
      }
      return response.json();
    })
    .then(() => {})
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al eliminar la tarea");
    });
}


// estaba intentando lo del contador


// let contadorcito =document.getElementById("contadorcito")
// function mostrar() {
//     contadorcito.innerHTML = "Tareas completas : ${check} ";

//   }

//  function check(taskId) {
 
//   fetch(`http://localhost:3000/api/task/${taskId}`, {
  
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "check": "cheked",
//     }),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("error");
//       }
//       return response.json();
//     })
//     .then(() => {
//       contador++
//       mostrar()
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("");
//     });

   
    


// }

