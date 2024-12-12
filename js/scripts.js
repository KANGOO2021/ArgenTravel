
document.getElementById("form").addEventListener("submit", function(event) {
    // Obtener todos los inputs y textarea
    const inputs = document.querySelectorAll("input, textarea");
    
    let formComplete = true;  // Bandera para verificar si todos los campos están completos
    
    // Recorrer cada input y textarea
    for (let input of inputs) {
        if (!input.value.trim()) {  // Verificar si el valor del campo está vacío
            formComplete = false;
            break;  // Si algún campo está vacío, no es necesario seguir revisando
        }
    }
    
    // Mostrar mensaje en consola y evitar el envío si algún campo está vacío
    if (!formComplete) {
        event.preventDefault();  // Evitar el envío del formulario
        console.log("Por favor, completa todos los campos del formulario.");
        alert("Por favor, completa todos los campos del formulario.");
    } else {
        event.preventDefault();
        console.log("Todos los campos están completos.");
        alert("Todos los campos están completos.");
    }
});


  // Seleccionar todas las tarjetas dentro de la sección
  const tarjetas = document.querySelectorAll('.card');

  // Inicializar un contador para la numeración
  let contador = 1;

  // Recorrer cada tarjeta y mostrar el número y el título en la consola
  tarjetas.forEach(tarjeta => {
    const titulo = tarjeta.querySelector('.card-title').textContent;
    console.log(`${contador}. ${titulo}`);
    contador++; // Aumentar el contador en cada iteración
  });



  


 