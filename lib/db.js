var mysql = require('mysql');
var dboptions = require('./dboptions');

var db = mysql.createConnection(dboptions);

db.connect();

module.exports = db;