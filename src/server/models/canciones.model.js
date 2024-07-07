import db from '../database/db_connect.js'

// a este codigo le falta lo de clase anterior
// paginacion y restricciones de la query para precio máximo, minimo, cantidad registros
// se modifica la función findAll completa, recibiendo los paramteros que mandan para consultar

export const findAll = () => db('SELECT * FROM canciones;')

export const findById = (id) => db('SELECT * FROM canciones WHERE id = $1;', [id])

export const create = ({ nombre, artista }) =>
  db('INSERT INTO canciones (id, nombre, reproducciones, artista) VALUES (DEFAULT, $1, DEFAULT, $2) RETURNING *;', [nombre, artista])

export const updateById = (id, { nombre, reproducciones, artista }) =>
  db('UPDATE canciones SET nombre = $2, reproducciones = $3, artista = $4 WHERE id = $1 RETURNING *;', [id, nombre, reproducciones, artista])

export const deleteById = (id) => db('DELETE FROM canciones WHERE id = $1 RETURNING *;', [id])