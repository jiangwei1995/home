var app = require('express')();
app.listen(1337);
app.get('/',function(req,res){
  res.send("你好home");
});
app.get('/test',function(req,res){
  res.send("你好test");
});
app.get('/test1',function(req,res){
  res.send("你好test1");
});
