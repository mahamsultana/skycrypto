import express from "express"
import mongoose, { mongo } from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"


const app=express();
const PORT=process.env.PORT||5000;

app.use(bodyParser.json())

app.use(express.json())

app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.listen(PORT,()=>{
    console.log("server is running")
})

const evenSchema=new mongoose.Schema({
    title:string,
    theme:string,
    descrption:string,
    date:string,
})

const Event=mongoose.model("Event",evenSchema);

let DBURl=""
mongoose.connect(DBURL);