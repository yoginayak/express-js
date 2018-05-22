var express=require('express');
var app=express();
app.set("view engine","jade");
app.get("/",function(req,res)
	{
		res.render('quest8');
	});
var server=app.listen(5000,function()
{
console.log("node server is running");
});
