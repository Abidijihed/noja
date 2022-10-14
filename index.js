const app = require("./server/index");
const express = require("express");

const port = app.get("port");
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");
app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});


app.listen(port, () => {
  console.log(`app listening at http://local:${port}`);
});
