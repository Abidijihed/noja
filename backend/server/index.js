const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
const {routerstudents}=require('./routers/StudentRouter')

const cors = require('cors');
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}));
app.use(cookieParser())
app.set('port',3332);
app.use(express.json());
app.use('/',routerstudents)


module.exports = app