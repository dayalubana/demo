var express = require('express');
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
app.listen(3000,()=>{
    console.log('App is running');
})