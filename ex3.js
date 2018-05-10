var express= require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser());
app.get('/',function (req,res)
{
	res.sendfile('form.html');

});
app.post('/submit-student-data',function (req,res)
{
	var name= req.body.fname+" "+req.body.lname;
	res.send(name + " submited succesfully");

});
app.listen(3000);
console.log('server is running');