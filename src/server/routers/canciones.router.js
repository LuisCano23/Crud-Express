import { Router } from 'express'
import * as cancionesController from '../controllers/canciones.controller.js'
import { authToken } from '../middlewares/canciones.middleware.js'

const router = Router()

router.get('/canciones', cancionesController.findAll)
router.get('/canciones/:id', cancionesController.findById)
router.post('/canciones', authToken, cancionesController.create)
router.put('/canciones/:id', authToken, cancionesController.updateById)
router.delete('/canciones/:id', authToken, cancionesController.deleteById)

export default router