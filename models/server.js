const express = require('express');

const cors = require('cors');

class Server {
  constructor() {
    this.app  = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = '/api/usuarios';

    
    // Middlewares : es una función que se ejecuta antes de que llegue a las rutas

    // Cors
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // Directorio público
    this.app.use(express.static('public'));
  } 

  routes() {
    // Cargar las rutas
    this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
  }




  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`);
    });
  }


}

module.exports = Server;