const router= require("express").Router()
const mailmodel=require("../models/mail")
router.post("/api/sendmail",mailmodel.nodmail)
module.exports ={mailrouter:router}