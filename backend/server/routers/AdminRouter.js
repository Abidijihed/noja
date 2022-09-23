const router= require("express").Router();
const adminmodel=require('../models/admin');

router.get('/api/getadmin',adminmodel.GetAdmin);

module.exports={routeradmin:router}