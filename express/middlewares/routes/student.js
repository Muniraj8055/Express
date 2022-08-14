import express from 'express'
const router = express.Router()

import studentController from '../controllers/studentController.js'
import myLogger from '../middleware/logger_middleware.js'


router.use(myLogger) //route level middleware


router.get('/student',studentController)


export default router