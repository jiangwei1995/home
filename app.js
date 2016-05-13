var app = require('express')();
app.listen(1337);
app.get('/',function(req,res){
  res.send("你好home");
});
 
