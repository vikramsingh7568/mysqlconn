
var con = require("./conn.js")
var route = require("./routes/route.js")
var express = require("express");
const bodyParser = require('body-parser');
var app = express();

app.use('/', route);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.get("/",function (req,res) {
  res.sendFile(__dirname+'/register.html');
})

// getting form data using body parser
app.post("/",function(req,res) {
     var name = req.body.name
     var email = req.body.email
     var mno = req.body.mno
     console.log(name,email,mno)

     con.connect(function(error) {
        if(error) throw error;
        // writing sql query to insert data in data base
        var sql = "INSERT INTO STUDENTS(name, email, mno) VALUES('" +name+"', '" +email+"','"+mno+"')";
        con.query(sql,function(error,result){
            res.send('Record is inserted successfyllt'+result.insertid);
        });
     });
});

app.listen(7000)
