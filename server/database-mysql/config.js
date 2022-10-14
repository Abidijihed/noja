const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'db-mysql-fra1-44899-do-user-11624328-0.b.db.ondigitalocean.com',
  user: 'jihed',
  port:25060,
  password: 'AVNS_blS-FZtYk_U9Le2zKtr',
  database: 'noja',
});
connection.connect()
connection.query('SELECT * from students', function(err, rows, fields) {
  if(err) console.log(err);
  console.log('The solution is: ', rows);
  connection.end();
});

module.exports = {connection}