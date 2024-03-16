const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors');
const dbConnect=require('./Config/DBconnect');
const Authrouter = require('./Route/Auth');

const app=express();
dbConnect();
app.use(cors());
app.use(express.json());
app.use('/api',Authrouter);

const PORT=process.env.PORT||8090;
 
mongoose.connection.once("open",()=>{
    console.log("Connected to DataBase");
    app.listen(PORT,(req,res)=>{
        console.log("Server started....")
    });
})
