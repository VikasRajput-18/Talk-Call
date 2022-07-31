 
const express  = require('express');
const app =  express();
const path = require('path')

const port  = 8000;
app.set('view engine' ,'ejs');
app.set('views' , './views')

app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Error is showing in port : ${port}`)
    }
    console.log(`Server is listening on port : ${port}`)
})