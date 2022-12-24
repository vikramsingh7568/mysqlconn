
var con = require("../conn")





let getData = function(req,res) {
    con.query("select * from students", (err,result) => {
       if(err) throw err;
       else res.send(result)
    })
}

module.exports ={ getData}