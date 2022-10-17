const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ji31826832',
  database: 'noja',
});
connection.connect(()=>{ 
  console.log('connected')
})



module.exports = {connection}