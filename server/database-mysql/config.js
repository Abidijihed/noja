const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port:5200,
  user: 'root',
  password: 'Ji31826832$',
  database: 'nojaschool_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});module.exports = {connection}