var express=require('express');
var app=express();


app.get('/',function (req,res)
{
	res.sendfile('form3.html');
});
app.listen(9000);
console.log("Server running");