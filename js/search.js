// Función para normalizar los textos eliminando acentos y convirtiéndolos a minúsculas
function normalizeText(text) {
    const accents = {á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ñ: 'n'};
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función que filtra los paquetes de viajes según el término de búsqueda
function filterPackages() {
    // Obtiene el valor del campo de búsqueda
    const searchTerm = document.querySelector('input[type="search"]').value.trim().toLowerCase();
    
    // Selecciona todos los paquetes de viajes
    const packages = document.querySelectorAll('.card');
    
    // Bandera para verificar si se encontró alguna coincidencia
    let found = false;
    
    // Filtra los paquetes de viajes
    packages.forEach(package => {
        const title = normalizeText(package.querySelector('.card-title').textContent);
        
        // Si el título contiene el término de búsqueda, lo muestra
        if (title.includes(normalizeText(searchTerm))) {
            package.style.display = 'block';
            found = true;
        } else {
            package.style.display = 'none';
        }
    });
    
    // Si no se encontró ninguna coincidencia, muestra el mensaje
    const noResults = document.querySelector('#noResults');
    if (found) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
    
    // Realiza el scroll hasta el título "Nuestros Viajes"
    document.querySelector('#Viajes').scrollIntoView({behavior: 'smooth'});
}

// Función que restablece los paquetes de viajes originales
function resetPackages() {
    const packages = document.querySelectorAll('.card');
    packages.forEach(package => {
        package.style.display = 'block';
    });
    document.querySelector('#noResults').style.display = 'none'; // Ocultar el mensaje "No hay coincidencias"
}

// Evento para ejecutar la búsqueda cuando se hace clic en el botón "Buscar"
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la acción por defecto del formulario
    filterPackages();
});

// Evento para restablecer los paquetes cuando se borra la búsqueda
document.querySelector('input[type="search"]').addEventListener('input', function(event) {
    if (event.target.value === '') {
        resetPackages();
    }
});

// Crear un mensaje "No hay coincidencias" dinámicamente
const noResultsMessage = document.createElement('div');
noResultsMessage.id = 'noResults';
noResultsMessage.style.display = 'none';
noResultsMessage.style.textAlign = 'center';
noResultsMessage.style.fontSize = '25px';
noResultsMessage.style.color = 'black';
noResultsMessage.style.backgroundColor = 'red';
noResultsMessage.style.width = '50%';
noResultsMessage.style.marginLeft = 'auto';
noResultsMessage.style.marginRight = 'auto';
noResultsMessage.style.borderRadius = '20px';
noResultsMessage.style.fontWeight = '500';
noResultsMessage.style.padding = '5px';
noResultsMessage.style.marginBottom = '20px';

noResultsMessage.textContent = 'No hay coincidencias';
document.querySelector('section').appendChild(noResultsMessage);


// Obtén el botón "Mi Carrito"
const carritoButton = document.querySelector('#pills-profile-tab');
const productButton = document.querySelector('#pills-home-tab');

// Obtén el contenedor del buscador (ajusta el selector a tu HTML real)
const buscador = document.querySelector('#buscador'); // Asegúrate de tener un ID o clase específica para el buscador

// Evento para ocultar el buscador cuando se presione el botón "Mi Carrito"
carritoButton.addEventListener('click', function() {
    if (buscador) {
        buscador.style.display = 'none'; // Oculta el buscador
        noResultsMessage.style.display = 'none';

    }
});

productButton.addEventListener('click', function() {
    if (buscador) {
        buscador.style.display = 'block'; // Oculta el buscador
        resetPackages()
        document.getElementById('inpuBuscador').value = '';
    }
});





  
  
