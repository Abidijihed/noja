const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // port:25060,
  password: 'Ji31826832',
  database: 'noja',
});
// connection.connect()
connection.query('SELECT * from students', function(err, rows, fields) {
  if(err) console.log(err);
  console.log('The solution is: ', rows);
  connection.end();
});

module.exports = {connection}