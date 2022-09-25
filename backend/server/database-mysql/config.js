const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '127.0.0.1',
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