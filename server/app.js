const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config()
const mongoose = require('mongoose');

const userRouter=require('./routes/userRouter')

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user',userRouter)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{app.listen(process.env.PORT || 3000,()=>{
    console.log("server is listening");
  })
})
.catch((err)=>{
    console.log(err);
})
