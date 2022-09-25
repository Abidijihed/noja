const app = require("./server/index");
const port = app.get("port");
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: false,
  })
);


app.listen(port, () => {
  console.log(`app listening at http://127.0.0.1:${port}`);
});
