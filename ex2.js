var express=require('express');
var app=express();
app.get('/Node',function(req,res)
{
	res.send('tutuorial on node');
});
app.get('/angular',function(req,res)
{
	res.send('tutuorial on angualar');
});
app.get('/',function (req,res)
{
	res.send('Welcome');
	});
var server = app.listen(3000,function(){});