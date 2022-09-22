const router= require("express").Router()
const studentmodel=require('../models/students.js')
const middleware=require('../middleware/auth')

router.post('/api/createstudents',studentmodel.CreateStudent)
router.post('/api/login',studentmodel.VerifyStudent)
router.get('/api/getnotificationadmin',studentmodel.getnotificationadmin)
router.get('/api/session',middleware.VerifySession)

module.exports={routerstudents:router}