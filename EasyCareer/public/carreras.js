function seleccionarContenedor(contenedor) {
  contenedor.classList.toggle("seleccionado");
  
  let contenedoresSeleccionados = [];
  let contenedores = document.querySelectorAll('.carrera.seleccionado');
  
  contenedores.forEach(contenedor => {
    contenedoresSeleccionados.push(contenedor.textContent.trim());
  });
  
  let basico = document.querySelector('.basico');
  let salario = document.querySelector('.salario');
  let requisitos = document.querySelector('.requisitos');
  let popular = document.querySelector('.popular');
  let ubicacion = document.querySelector('.ubicacion');
  let dificultad = document.querySelector('.dificultad');
  let todos = document.querySelector('.todos');
  
  let salarioRequisito = document.querySelector('.salarioRequisito');
  let salarioPopular = document.querySelector('.salarioPopular');
  let salarioUbicacion = document.querySelector('.salarioUbicacion');
  let salarioDificultad = document.querySelector('.salarioDificultad');
  let requisitoPopular = document.querySelector('.requisitoPopular');
  let requisitoUbicacion = document.querySelector('.requisitoUbicacion');
  let requisitoDificultad = document.querySelector('.requisitoDificultad');
  let popularUbicacion = document.querySelector('.popularUbicacion');
  let popularDificultad = document.querySelector('.popularDificultad');
  let ubicacionDificultad = document.querySelector('.ubicacionDificultad');

  let salarioRequisitoPopular = document.querySelector('.salarioRequisitoPopular');
  let requisitoPopularUbicacion = document.querySelector('.requisitoPopularUbicacion');
  let salarioUbicacionDificultad = document.querySelector('.salarioUbicacionDificultad');
  let requisitoPopularDificultad = document.querySelector('.requisitoPopularDificultad');
  let salarioPopularDificultad = document.querySelector('.salarioPopularDificultad');
  let requisitoUbicacionDificultad = document.querySelector('.requisitoUbicacionDificultad');
  let salarioRequisitoUbicacion = document.querySelector('.salarioRequisitoUbicacion');
  let popularUbicacionDificultad = document.querySelector('.popularUbicacionDificultad');
  let salarioPopularUbicacion = document.querySelector('.salarioPopularUbicacion');
  let salarioRequisitoDificultad = document.querySelector('.salarioRequisitoDificultad');

  let salarioRequisitoPopularUbicacion = document.querySelector('.salarioRequisitoPopularUbicacion');
  let salarioRequisitoPopularDificultad = document.querySelector('.salarioRequisitoPopularDificultad');
  let salarioRequisitoUbicacionDificultad = document.querySelector('.salarioRequisitoUbicacionDificultad');
  let salarioPopularUbicacionDificultad = document.querySelector('.salarioPopularUbicacionDificultad');
  let requisitoPopularUbicacionDificultad = document.querySelector('.requisitoPopularUbicacionDificultad');




  let main = document.querySelector('main');

  if (contenedoresSeleccionados.length === 1) {
    if (contenedoresSeleccionados.includes('Salario')) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salario.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.includes('Requisitos')) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitos.style.display = 'block';
    }
    else if (contenedoresSeleccionados.includes('Más Populares')) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      popular.style.display = 'block';
    }
    else if (contenedoresSeleccionados.includes('Ubicación')) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      ubicacion.style.display = 'block';
    }
    else if (contenedoresSeleccionados.includes('Dificultad')) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      dificultad.style.display = 'block';
    }
  } 
  else if (contenedoresSeleccionados.length === 2) {
    if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisito.style.display = 'block';
    }
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Más Populares'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioPopular.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioUbicacion.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Más Populares', 'Requisitos'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoPopular.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Ubicación', 'Requisitos'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoUbicacion.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Dificultad', 'Requisitos'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Más Populares', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      popularUbicacion.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Más Populares', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      popularDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Dificultad', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      ubicacionDificultad.style.display = 'block';
    } 
  }
  else if (contenedoresSeleccionados.length === 3) {
    if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Más Populares'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisitoPopular.style.display = 'block';
    }
    else if (contenedoresSeleccionados.every(item => ['Requisitos', 'Más Populares', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoPopularUbicacion.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioUbicacionDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Requisitos', 'Más Populares', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoPopularDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Más Populares', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioPopularDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Requisitos', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoUbicacionDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisitoUbicacion.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Más Populares', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      popularUbicacionDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Más Populares', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioPopularUbicacion.style.display = 'block';
    } 
    if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisitoDificultad.style.display = 'block';
    } 
  }
  else if (contenedoresSeleccionados.length === 4) {
    if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Más Populares', 'Ubicación'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisitoPopularUbicacion.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Más Populares', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisitoPopularDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioRequisitoUbicacionDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Salario', 'Más Populares', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      salarioPopularUbicacionDificultad.style.display = 'block';
    } 
    else if (contenedoresSeleccionados.every(item => ['Requisitos', 'Más Populares', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      requisitoPopularUbicacionDificultad.style.display = 'block';
    } 
  }
  else if (contenedoresSeleccionados.length === 5) {
    if (contenedoresSeleccionados.every(item => ['Salario', 'Requisitos', 'Más Populares', 'Ubicación', 'Dificultad'].includes(item))) {
      main.querySelectorAll('ul').forEach(ul => {
        ul.style.display = 'none';
      });
      todos.style.display = 'block';
    } 
  }
  else {
    main.querySelectorAll('ul').forEach(ul => {
      ul.style.display = 'none';
    });
    basico.style.display = 'block';

  }
}
