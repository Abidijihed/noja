const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
const {routerstudents}=require('./routers/StudentRouter')
const {routeradmin}=require ('./routers/AdminRouter')
const {mailrouter}=require('./routers/MailRouter')
const cors = require('cors');
app.use(cors());

app.use(cookieParser())
app.set('port',3332);
app.use(express.json());
// app.use('/',mailrouter)
app.use('/',routeradmin)
app.use('/',routerstudents)


module.exports = app