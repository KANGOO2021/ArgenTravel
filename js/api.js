
const $d = document;
const $selectProvincias = $d.getElementById("selectProvincias");
const $selectMunicipios = $d.getElementById("selectMunicipios");
const $selectLocalidades = $d.getElementById("selectLocalidades");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            let $options = `<option value="Elige una provincia">Elige una provincia</option>`;

            // Ordenar alfabéticamente
            json.provincias.sort((a, b) => a.nombre.localeCompare(b.nombre))
                .forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);
              
            $selectProvincias.innerHTML = $options;
            $options.sty
        })
        .catch(error => {
            let message = error.statusText || "Ocurrió un error";
            $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
        });
}

$d.addEventListener("DOMContentLoaded", provincia);

function municipio(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            let $options = `<option value="Elige un municipio">Elige un municipio</option>`;
            

            // Ordenar por id en orden ascendente
            json.municipios.sort((a, b) => a.id - b.id)
                .forEach(el => $options += `<option value="${el.id}">${el.nombre}</option>`);

            $selectMunicipios.innerHTML = $options;
        })
        .catch(error => {
            let message = error.statusText || "Ocurrió un error";
            $selectMunicipios.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
        });
}


$selectProvincias.addEventListener("change", e => {
    municipio(e.target.value);
    console.log(e.target.value);
});

function localidad(municipio) {
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?municipio=${municipio}`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            let $options = `<option value="Elige una localidad">Elige una localidad</option>`;

            // Ordenar alfabéticamente
            json.localidades.sort((a, b) => a.nombre.localeCompare(b.nombre))
                .forEach(el => $options += `<option value="${el.id}">${el.nombre}</option>`);

            $selectLocalidades.innerHTML = $options;
        })
        .catch(error => {
            let message = error.statusText || "Ocurrió un error";
            $selectLocalidades.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
        });
}

$selectMunicipios.addEventListener("change", e => {
    localidad(e.target.value);
    console.log(e.target.value);
});

function resetSelects() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0; // Resetea el valor seleccionado al primero
    });
}
