async function verTareas() {
  try {
    const response = await fetch("http://localhost:3000/api/task/");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

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


function check() {
 
  fetch(`http://localhost:3000/api/task/`, {
    method: "PUT",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("");
      }
      return response.json();
    })
    .then(() => {})
    .catch((error) => {
      console.error("Error:", error);
      alert("");
    });

    
}

