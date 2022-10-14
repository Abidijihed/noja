const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'db-mysql-fra1-44899-do-user-11624328-0.b.db.ondigitalocean.com',
  user: 'jihed',
  port:'25060',
  password: 'AVNS_blS-FZtYk_U9Le2zKtr',
  database: 'noja',
  insecureAuth : true
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = {connection}