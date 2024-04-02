import  express from "express";
import cors from 'cors'
import {facultyrouter} from "./Server/routes/facultyroute.js";
const app = express()
app.use(cors({
    origin:["http://localhost:5174/"],
    methods:['GET','POST','PUT'],
    credentials: true
}))
app.use(express.json())
app.use('/auth',facultyrouter)
app.listen(3001, ()=>{
    console.log("Server is running.")
}

)