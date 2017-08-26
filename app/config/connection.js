// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// // Require mysql
// var mysql = require("mysql");

// // Set up our connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Cricket47",
//   database: "tindfur"
// });

// // Connect to the database
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection
// module.exports = connection;

var Sequelize = require("sequelize");
//mysql://l15l0uwqmotagnt7:m46acng4fadn8ab9@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z9jgxv7wg91vhhe6
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("z9jgxv7wg91vhhe6", "l15l0uwqmotagnt7", "m46acng4fadn8ab9", {
  host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// Exports the connection for other files to use
module.exports = sequelize;
