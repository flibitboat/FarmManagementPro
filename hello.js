var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'admin',
   password : 'admin',
   database : 'test'
 });

 connection.connect();

 connection.query('SELECT * from cows', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
     console.log(err);
 });

 connection.end();
