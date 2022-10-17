// const app = require("./server/index");
const express = require("express")
const mysql = require('mysql2');
const app = express();
// const port = app.get("port");
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const path = require("path");
// app.use(express.static(path.resolve(__dirname, './frontend/build')));
const cookieParser = require('cookie-parser');
app.use(cookieParser())

const connection = mysql.createConnection({
  host: 'localhost',
  port:3332,
  user: 'root',
  password: 'Ji31826832',
  database: '$noja_db',
});
app.get('/',(req,res)=>{
  connection.query('INSERT INTO students (FirstName) VALUES ("jihed");',
  function(err,results,fields){
    console.log(results)
    res.send('persson created')
  }
  );
})
app.get('/get',(req,res)=>{
  connection.query('select * from students;',
        function(err,results,fields){
    res.send(results)
  }
  );
})
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
// });
app.listen(3332, () => {
  console.log("Backend server is running!");
});
