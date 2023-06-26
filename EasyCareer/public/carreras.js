function seleccionarContenedor(contenedor) {
  var seleccionado = contenedor.getElementsByTagName('h3')[0].innerHTML;
  var resultContainer = document.getElementById('result-container');
  var basicoList = document.getElementById('basico-list');

  var isSelected = contenedor.classList.contains('seleccionado');

  if (isSelected) {
    contenedor.classList.remove('seleccionado');
  } else {
    contenedor.classList.add('seleccionado');
  }

  // Obtener todos los contenedores seleccionados
  var contenedoresSeleccionados = Array.from(document.getElementsByClassName('carrera seleccionado'));
  
  fetch('http://localhost:3000/carreras')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var carreras = data;
      var resultHTML = '';

      carreras.forEach(function(carrera) {
        var nombre = carrera.nombre;
        var filtro = '';
        // Combinar los datos de los contenedores seleccionados
        contenedoresSeleccionados.forEach(function(cont) {
          var seleccionado = cont.getElementsByTagName('h3')[0].innerHTML;

          if (seleccionado === 'Salario') {
            filtro += carrera.salario + ' ';
          } else if (seleccionado === 'Requisitos') {
            filtro += carrera.requisitos + ' ';
          } else if (seleccionado === 'Más Populares') {
            filtro += carrera.popular + ' ';
          } else if (seleccionado === 'Ubicación') {
            filtro += carrera.ubicacion + ' ';
          } else if (seleccionado === 'Dificultad') {
            filtro += carrera.dificultad + ' ';
          }
        });

        if (filtro.trim() !== '') {
          resultHTML += '<li>' + nombre + ": " + filtro.trim() + '</li>';
        }

      });

      resultContainer.innerHTML = '<ul class="basico">' + resultHTML + '</ul>';

      // Verificar si hay al menos un contenedor seleccionado
      if (contenedoresSeleccionados.length > 0) {
        basicoList.style.display = 'none';
      } else {
        basicoList.style.display = 'block';
      }
    })
    .catch(function(error) {
      console.log('Error al leer el archivo db.json:', error);
    });
}
