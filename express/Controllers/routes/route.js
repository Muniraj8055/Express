const express = require('express')

const router = express.Router()

const Controller = require('../controller/studentController'); 



router.get("/all",Controller.allStudents)

router.get('/delete/:id([0-9]{2})', Controller.deleteStudent)

module.exports = router;