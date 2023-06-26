document.addEventListener('DOMContentLoaded', function() {
  var loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    fetch("http://localhost:3000/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("veamos la dataaaa: ", data)
        var users = data;

        // Verificar las credenciales del usuario
        var usuarioEncontrado = null;
        for (var i = 0; i < users.length; i++) {
          var usuario = users[i];
          if (usuario.correo === email && usuario.contrasena === password) {
            usuarioEncontrado = usuario;
            break;
          }
        }

        if (usuarioEncontrado) {
          // Credenciales válidas, redirigir al usuario a la página principal
          window.location.href = 'Inicio.html';
        } else {
          // Credenciales incorrectas, mostrar mensaje de error
          alert('Credenciales incorrectas');
        }
      })
      .catch(function(error) {
        console.log('Error al leer el archivo db.json:', error);
      });
  });
});