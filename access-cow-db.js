// import React from 'react';
// import ReactDOM from 'react-dom';
var ReactDOM = require('react-dom');
var React = require('react');
var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'admin',
   password : 'admin',
   database : 'test'
 });

 connection.connect();
 var jsx = "";

 connection.query('SELECT * from cows', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', rows);
    //  ReactDOM.render(
    //   <h1>Hello, world!</h1>,
    //   document.getElementById('root')
    // );
   else
     console.log('Error while performing Query.');
     console.log(err);
 });

 connection.end();


// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
