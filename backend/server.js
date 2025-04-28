require ('dotenv').config()
//import config
const corsOptions=require('./config/corsOptions.js')

//import third party packages 
const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors'); // Import cors middleware

//import custom routers
const maisonRoutes=require('./routes/maison.js');
const cookieParser = require('cookie-parser');


//import controllers
const refreshToken = require('./controllers/refreshToken.js');
const logout=require('./controllers/logout.js')
const signIn = require("./controllers/SignIn");
const signUp = require("./controllers/signUp");



//express app
const app=express()



//middlware
app.use(express.json())
app.use(cors(corsOptions)) ;// Enable cors for all origins
app.use(cookieParser());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



//routes    
app.post("/singUp",signUp);
app.post("/signIn",signIn );
app.get('/refreshToken',refreshToken)
app.get('/logout',logout);

app.use('/maisons',maisonRoutes);



// error handling
app.use((err,req,res,next)=>{
    console.log(`Error:${err.message} `)
})





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




module.exports=app;