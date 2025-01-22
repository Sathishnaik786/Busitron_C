import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';


dotenv.config();
const app = express();
const port =process.env.PORT || 7000;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials : true
}))

const connctDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Conneted")
    } catch (error) {
        console.log("DataBase Error",error)
    }
}


connctDataBase().then(()=>{
    app.listen(port, ()=>{
        console.log(`Sever is Running on Port ${port}`)
    })
})