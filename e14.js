var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
app.get('/',function(req,res)
	{
		res.cookie('Test','Cookie');
		res.send('cookie is set');
	});
app.get('/get',function(req,res)
	{
		res.send(req.cookies);
	});
app.listen(8080);