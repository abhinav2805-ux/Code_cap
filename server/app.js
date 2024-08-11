const express = require('express');
const cors = require('cors');
const app=express();
const cookieParser = require('cookie-parser');
require('dotenv').config()
const mongoose = require('mongoose');

const userRouter=require('./routes/userRouter');
const eventRouter = require('./routes/eventRouter');


app.use(cors({
    origin: ' http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true, // Allow credentials (cookies)
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use('/api/user',userRouter)
app.use('/api/events',eventRouter)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{app.listen(process.env.PORT || 3000,()=>{
    console.log("server is listening");
  })
})
.catch((err)=>{
    console.log(err);
})
