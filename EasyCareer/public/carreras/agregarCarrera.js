// Obtener el formulario y el botón de crear
const formulario = document.getElementById('carrera-form');
const botonCrear = document.getElementById('crear-btn');

// Función para enviar los datos del formulario a la API
const agregarCarrera = async (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const salario = document.getElementById('salario').value;
  const requisitos = document.getElementById('requisitos').value;
  const popular = document.getElementById('popular').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const dificultad = document.getElementById('dificultad').value;

  // Validar que los campos no estén vacíos
  if (nombre === '' || salario === '' || requisitos === '' || popular === '' || ubicacion === '' || dificultad === '') {
    alert('Por favor, completa todos los campos');
    return; // Detener la ejecución de la función si hay campos vacíos
  }

  // Crear objeto para la nueva carrera
  const nuevaCarrera = {
    nombre,
    salario,
    requisitos,
    popular,
    ubicacion,
    dificultad
  };

  try {
    // Realizar la solicitud POST a http://localhost:3000/carreras
    const response = await fetch('http://localhost:3000/carreras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaCarrera)
    });

    if (response.ok) {
      console.log('La nueva carrera se ha agregado a la API');
      // Redirigir a otra página después de agregar la carrera (opcional)
      window.location.href = '../carreras.html';
    } else {
      console.error('Error al agregar la nueva carrera a la API');
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

// Agregar el evento de clic al botón de crear
botonCrear.addEventListener('click', agregarCarrera);
