import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
dotenv.config({});
// import cors from 'cors'
import connectDB from './Config/config.db.mongose.js'
import userRoute from './Routes/user.route.js'
const app=express();

// app.use(cors(
//     {
//         origin:["http://localhost:5173"],
//         credentials:true
//     }
// ))
app.use(cookieParser());

app.use(express.json());


//api initial endpoints
app.use("/api/v1/user",userRoute)



//Server
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    connectDB();
    console.log(`--> Server Started @ http://localhost:${PORT}/`);
})

//Check Server
app.get("/status", (req,res)=>{
    res.send(`SERVER is Live @ http://localhost:${PORT}/status`)
})