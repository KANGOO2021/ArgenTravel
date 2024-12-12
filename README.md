# ArgenTravel - Agencia de Viajes en Argentina

**ArgenTravel** es una agencia de viajes que brinda a sus clientes una experiencia personalizada para descubrir las maravillas de Argentina. En ArgenTravel, los viajeros pueden reservar paquetes turísticos con destinos destacados, salidas grupales, viajes de aventura y experiencias all-inclusive.


## Secciones Principales

### Navbar
El menú de navegación contiene los enlaces principales de la agencia:
- **Viajes**: Muestra los destinos turísticos más importantes.
- **Preguntas**: Dirige a la sección de preguntas frecuentes sobre los servicios de la agencia.
- **Consultas**: Permite al cliente enviar mensajes a la agencia con sus dudas o solicitudes.
- **Contacto**: Información de contacto directo de la agencia.
- **API**: Match dinámico con los endpoints de la API pública de Argentina para obtener datos actualizados.
- **Buscador**: Permite filtar los paquetes de viajes en forma dinámica.

### Viajes
La sección de **Nuestros Viajes** incluye un listado de destinos con tarjetas detalladas que muestran imágenes de los lugares, descripciones y un botón de "Reservar" para cada destino.

### Preguntas Frecuentes
En esta sección se resuelven las dudas comunes de los viajeros:
1. **¿Cómo son los paquetes turísticos?**
2. **¿Cómo conseguir paquetes de viajes baratos?**
3. **¿Por qué elegir un Paquete All Inclusive?**
4. **¿Qué es un Paquete Recomendado?**
5. **¿Cómo se puede pagar un paquete turístico?**
6. **¿Cómo aplicar un código de descuento?**

### Consultas
Un formulario de contacto donde los clientes pueden:
- Proporcionar su nombre, apellido y correo electrónico.
- Enviar un mensaje con cualquier consulta.

### Contacto y Redes Sociales
El pie de página contiene la dirección física de la agencia, correo electrónico, enlaces a redes sociales (Facebook, Instagram, Twitter, YouTube, TikTok), y opciones de pago (Visa, MasterCard, Diners Club, PayPal).


## Tecnologías utilizadas

- **HTML5** para la estructura de la página.
- **Bootstrap 5** para un diseño responsivo y moderno.
- **JavaScript** para la interacción con las APIs públicas.
- **Formspree** para gestionar el envío de consultas desde el formulario de contacto.


# Funcionalidades Javascript

## 1. **Filtro de búsqueda de paquetes de viajes**
- Los usuarios pueden utilizar el buscador para filtrar y encontrar paquetes turísticos según sus necesidades.
- La sección "Nuestros Viajes" incluye una lista de paquetes destacados con información relevante como el destino, una breve descripción y la opción de reserva directa.

## 2. **Integración con la API del gobierno argentino**
- La página incluye un botón de acceso directo a una sección API (`/pages/api.html`), que permite:
  - **Consultar provincias:** Muestra un listado completo de todas las provincias argentinas.
  - **Consultar municipios:** Proporciona información detallada sobre los municipios dentro de una provincia seleccionada.
  - **Consultar localidades:** Permite acceder a datos específicos sobre localidades en un municipio.
- Esta funcionalidad se realiza utilizando los endpoints públicos disponibles en el catálogo de APIs del gobierno argentino: [Catálogo de APIs del Gobierno de Argentina](https://www.argentina.gob.ar/onti/software-publico/catalogo/apis).

## 3. **Carrito de Compras**
El carrito permite a los usuarios agregar, ver y eliminar productos, actualizar la cantidad y calcular el total. Los datos del carrito se mantienen persistentes utilizando `localStorage`.

### Funcionalidades:
- **Agregar productos:** Al hacer clic en "Añadir al carrito", se agrega un artículo con su información (ID, título, precio, imagen y cantidad).
- **Eliminar productos:** Los productos pueden ser eliminados del carrito haciendo clic en el botón "x".
- **Actualizar cantidad de productos:** Los usuarios pueden modificar la cantidad de productos desde el carrito, con validación para evitar cantidades negativas.
- **Cálculo del total:** El total del carrito se actualiza automáticamente cada vez que se agregan o eliminan productos.
- **Persistencia de datos:** El carrito se guarda en el almacenamiento local (`localStorage`), permitiendo que los datos persistan entre recargas de página.

#### Archivos relacionados:
- `carrito.js`

## 4. **Pop-up de Reseñas en los Viajes**
Los usuarios pueden ver una reseña emergente al hacer clic en un botón de reseña sobre una tarjeta de viaje. El pop-up se ajusta dinámicamente dependiendo de la ubicación de la tarjeta y se adapta a dispositivos móviles.

### Funcionalidades:
- **Mostrar reseñas:** Al hacer clic en un botón de reseña, se muestra el contenido de la reseña correspondiente.
- **Ajuste dinámico de posición:** El pop-up se posiciona automáticamente en función de la ubicación de la tarjeta seleccionada, con ajustes especiales para dispositivos móviles.
- **Cerrar pop-up:** El pop-up puede cerrarse haciendo clic en el overlay, que cubre toda la página.

#### Archivos relacionados:
- `pop_up.js`

## 5. **Validación de Formulario**
Se asegura que todos los campos del formulario estén completos antes de que se envíe el formulario. Si algún campo está vacío, se evita el envío y se muestra un mensaje en la consola y en forma de alerta.

### Funcionalidades:
- **Verificación de campos vacíos:** Se recorren todos los campos `input` y `textarea` para verificar si están completos.
- **Prevención de envío:** Si algún campo está vacío, el formulario no se envía y se muestra una alerta al usuario.
- **Mensaje de éxito:** Si todos los campos están completos, se muestra un mensaje en la consola indicando que el formulario está listo para enviarse.

#### Archivos relacionados:
- `scripts.js`

## 6. **Impresiones en la Consola**
Se imprime en la consola información relevante sobre las tarjetas de viaje. Se muestra el número de tarjeta y el título de cada una para facilitar el seguimiento y la depuración.

### Funcionalidades:
- **Mostrar información de las tarjetas:** Se recorren todas las tarjetas y se muestra el número de la tarjeta y su título en la consola.

#### Archivos relacionados:
- `scripts.js`



## Cómo Contribuir
Para realizar contribuciones al desarrollo del sitio de ArgenTravel, contacta con **Sergio Muñoz** a través de su [Portfolio-CV](https://kangoo2021.github.io/Portfolio-CV/).

## Licencia
El sitio ArgenTravel está desarrollado por **Sergio Muñoz** en 2024 y cuenta con derechos de autor.


