import { Router } from 'express'
import * as podcastsController from '../controllers/podcasts.controller.js'
import { authToken } from '../middlewares/podcasts.middleware.js'

const router = Router()

router.get('/podcasts', podcastsController.findAll)
router.get('/podcasts/:id', podcastsController.findById)
router.post('/podcasts', authToken, podcastsController.create)
router.put('/podcasts/:id', authToken, podcastsController.updateById)
router.delete('/podcasts/:id', authToken, podcastsController.deleteById)

export default router