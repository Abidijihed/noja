const app = require("./server/index");
const express = require("express")
const port = app.get("port");
const path = require("path");
app.use(express.static(path.resolve(__dirname, './frontend/build')));
const cookieParser = require('cookie-parser');
app.use(cookieParser())


app.get('/', (req, res) => {
  res.send(path.resolve(__dirname, './frontend/build', 'index.html'));
});
app.listen(port,() => {
  console.log("Backend server is running!");
});
