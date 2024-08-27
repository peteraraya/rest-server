// Crear funciones y exportarlas


const { response } = require("express");

const usuariosGet = (req, res = response) => {

  const {
    q,
    nombre = 'No name',
    lastanme = 'No lastname',
    apikey,
    page = 1,
  } = req.query;



  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey,
    page
    
  });
}

const usuariosPost = (req, res = response) => {

  const {
    nombre,
    edad,
    correo,
    password,
    id,
    apellido,
  } = req.body;



  res.json({
    msg: 'post API - controlador',
    nombre,
    edad,
    correo,
    password,
    id,
    apellido,

  });
}

const usuariosPut = (req, res = response) => {

  // Extraer el id de los parametros
  const id = req.params.id;

  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosDelete = (req, res = response) => {

  res.json({
    msg: 'delete API - controlador'
  });
}

const usuariosPatch = (req, res = response) => {

  res.json({
    msg: 'patch API - controlador'
  });
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch
}