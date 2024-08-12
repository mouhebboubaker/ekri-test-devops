
require ('dotenv').config()

const express=require('express');
const mongoose=require('mongoose')
const maisonRoutes=require('./routes/maison.js');
const cors=require('cors'); // Import cors middleware
const exp = require('constants');

//express app
const app=express()

//middlware

app.use(express.json())
app.use(cors()) ;// Enable cors for all origins

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes    

app.use('/api/maisons',maisonRoutes);

//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('connected to database');
    //listen to port 
    app.listen(process.env.PORT,()=>{
        console.log('listenning for requests on port ',process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err);
})

