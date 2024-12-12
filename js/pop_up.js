// Elementos del DOM
const contenedorBotones = document.getElementById('contenedorBotones');
const popup = document.getElementById('popupNotificacion');
const contenido = document.getElementById('contenidoResena');
const body = document.body; // Para agregar el overlay en el body

// Crear y agregar el overlay a la página
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparente, igual al color de la página
overlay.style.zIndex = '999'; // Asegurarse de que el overlay esté encima de la página
overlay.style.display = 'none'; // Inicialmente oculto

body.appendChild(overlay);

// Delegación de eventos: escuchar clics en los botones
contenedorBotones.addEventListener('click', (event) => {
    const boton = event.target;

    if (boton.classList.contains('btn-popup')) {
        const resena = boton.getAttribute('data-resena');
        contenido.textContent = resena;

        // Obtener el contenedor de la card (padre de los botones)
        const card = boton.closest('.card');
        
        // Obtener las coordenadas de la card en relación con el documento
        const rectCard = card.getBoundingClientRect();
        const scrollY = window.scrollY; // Desplazamiento vertical de la página
        
        // Calcular la posición del pop-up (en la parte superior de la card)
        let posicionY = rectCard.top + scrollY - popup.offsetHeight; // Ajuste de la posición Y

        // Si deseas ajustar la posición manualmente en el eje Y (por ejemplo, 20px de margen arriba)
        const ajusteY = -720; // Puedes cambiar este valor según necesites

        // Ajuste en dispositivos móviles
        const esMovil = window.innerWidth <= 560; // Considera que 560px es el límite para dispositivos móviles

        if (esMovil) {
            // Ajuste para dispositivos móviles en el eje Y
            posicionY = rectCard.top + scrollY - popup.offsetHeight + 185; // Margen superior para móviles

            // Ajuste manual para el eje X en dispositivos móviles
            const ajusteX = -170; // Puedes ajustar este valor según lo necesites
            popup.style.left = `${rectCard.left + window.scrollX + (rectCard.width - popup.offsetWidth) / 2 + ajusteX}px`; // Ajuste en el eje X para móviles
        } else {
            // Ajuste para dispositivos de escritorio
            popup.style.left = `${rectCard.left + window.scrollX + (rectCard.width - popup.offsetWidth) / 2 - 168}px`; // Centrado horizontal en escritorio
        }

        popup.style.top = `${posicionY + ajusteY}px`; // Ajuste manual en Y
        popup.style.display = 'block'; // Mostrar el pop-up
        
        // Mostrar el overlay y bloquear interacciones
        overlay.style.display = 'block';
    }

});

// Función para cerrar el pop-up y el overlay
function cerrarNotificacion() {
    popup.style.display = 'none'; // Ocultar el pop-up
    overlay.style.display = 'none'; // Ocultar el overlay
}

// Cerrar el pop-up y el overlay si se hace clic sobre el overlay
overlay.addEventListener('click', () => {
    cerrarNotificacion(); // Llamar a la función para cerrar el pop-up y el overlay
});



