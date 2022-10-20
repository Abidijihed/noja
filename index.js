const app = require("./server/index");
const express = require("express")
const port = app.get("port");
const path = require("path");
const cookieParser = require('cookie-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: false,
  })
);


app.get('*', (req, res) => {
  res.send(path.resolve(__dirname, './frontend/build', 'index.html'));
});
app.listen(port,() => {
  console.log("Backend server is running!");
});
