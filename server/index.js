const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
const {routeradmin}=require('../server/routers/AdminRouter')
const {routerstudents}=require('../server/routers/StudentRouter')
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors');
app.use(cors());
const server = http.createServer(app);

// const io = socketIo(server);
var interval;
app.use(cookieParser())
app.set('port',3332);
app.use(express.json());
app.use('/',mailrouter)
app.use('/',routeradmin)
app.use('/',routerstudents)


module.exports = app