
var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    user:"root",
    password:"Jagpal@singh12345",
    database: "collegename"
});
console.log("mysql is connected ")
// conn.connect(function(err) {
//       if(err)
//         throw err;
//         console.log("mySql is connected..");
// })

module.exports = conn;
