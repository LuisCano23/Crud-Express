import db from '../database/db_connect.js'

// a este codigo le falta lo de clase anterior
// paginacion y restricciones de la query para precio máximo, minimo, cantidad registros
// se modifica la función findAll completa, recibiendo los paramteros que mandan para consultar

export const findAll = () => db('SELECT * FROM podcasts;')

export const findById = (id) => db('SELECT * FROM podcasts WHERE id = $1;', [id])

export const create = (nombre) =>
  db('INSERT INTO podcasts (id, nombre, seguidores) VALUES (DEFAULT, $1, DEFAULT) RETURNING *;', [nombre])

export const updateById = (id, { nombre, seguidores }) =>
  db('UPDATE canciones SET nombre = $2, seguidores = $3 WHERE id = $1 RETURNING *;', [id, nombre, seguidores])

export const deleteById = (id) => db('DELETE FROM podcasts WHERE id = $1 RETURNING *;', [id])