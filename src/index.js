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

verTareas();

export { verTareas, guardarTareas };
