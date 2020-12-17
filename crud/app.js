const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/cdb'
const port =80;

const app =express()

mongoose.connect(url, {useNewUrlParser:true , useUnifiedTopology: true });
const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected....');
})

const pepRouter =require('./routes/pep')
use.app('../pep',pepRouter)

app.listen(port ,()=>{
    console.log(`the app started successfuly on port${port}`);
})