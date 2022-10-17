const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port:3332,
  user: 'root',
  password: 'Ji31826832',
  database: 'noja_db',
});

`INSERT INTO students(FirstName,LastName,Email,Address,PhoneNumber,Skills,Password,image,country,Zip,creatAt,originpassword) VALUES("${req.body.FirstName}","${req.body.LastName}","${req.body.Email}","${req.body.Address}","${req.body.PhoneNumber}","${req.body.Skills}","${passwordHashed}","${req.body.image}","${req.body.country}","${req.body.Zip}","${req.body.creatAt}","${req.body.Password}")`

module.exports = {connection}