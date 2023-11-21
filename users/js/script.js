
const listaUsuarios = document.getElementById('listaUsuarios');

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(function (respuesta) {
          if (!respuesta.ok) {
              throw new Error('no se puede cargar');
          }
          return respuesta.json();
      })
      .then(function (usuarios) {
          console.log('usuarios',usuarios)
          const edadUsuario = usuarios.map(function (usuario) {
              return {
                  ...usuario,
                  age: EdadAleatoria(20, 45),
                  img: `${usuario.id}`,
                  company: usuario.company.name,
                  address: `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`
              };
          });
          edadUsuario.forEach(function (usuario) {
              mostrarUsuario(usuario);
              console.log(usuario)
          });
      })
      .catch(function (error) {
          console.error('Error al cargar:', error.message);
      });
  function EdadAleatoria(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function mostrarUsuario({ name, age, username,img, phone, email, company, address }) {

      const infoUsuario = `
      <li class="usuario">
      <div class="usuario-data">
        <div class="usuario">
            <strong>Nombre:</strong> ${name}<br>
            <strong>Edad:</strong> ${age}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Teléfono:</strong> ${phone}<br>
            <strong>Email:</strong> ${email}
            </div>
            <img src="../assets/img/${img}.jpeg" alt=""/>
            </div>
        <div>
          <strong>Compañía:</strong> ${company}<br>
          <strong>Dirección:</strong> ${address}
        </div>
      </li>
      `;

      listaUsuarios.innerHTML += infoUsuario;
  }
 