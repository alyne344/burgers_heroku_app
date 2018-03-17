//connection to SQL
const mysql = require('mysql');
var connection = {};
var jaws = "mysql://atqyurdnsixwsoff:mfp4lf7xlg074jwl@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/tpmphdtlnv955xd5";

if (jaws) { 
//Heroku deployment
  connection = mysql.createConnection(jaws);

} else {
  connection = mysql.createConnection({
    host: 'y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'atqyurdnsixwsoff',
    password: 'mfp4lf7xlg074jwl',
    database: 'tpmphdtlnv955xd5'
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database as id: ' + connection.threadId);
});

module.exports = connection;