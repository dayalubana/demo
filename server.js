var express = require('express');
var port = process.env.PORT||3000;
var app = express();
app.get('/',(req,res)=>{
    res.send('helo');
})
app.get('/posts',(req,res)=>{
    res.json([{name:'abc',age:20}])
})
app.get('/user',(req,res)=>{
    res.json([{name:'sahic',age:20}])
})
app.listen(port,()=>{
    console.log('App is running');
})