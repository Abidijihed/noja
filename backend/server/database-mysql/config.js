const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ji31826832',
  database: 'noja',
  insecureAuth : true
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = {connection}