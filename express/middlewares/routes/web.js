import express from 'express'
const router = express.Router()

// const home = require('../controllers/homeController.js')
// const about = require('../controllers/aboutController.js')

import {home} from '../controllers/homeController.js'
import {about} from '../controllers/aboutController.js'

router.get('/',home)

router.get('/about',about)


export default router