import  express from "express";
import cors from 'cors'
import {facultyrouter} from "./routes/facultyroute";
const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth',facultyrouter)
app.listen(3001, ()=>{
    console.log("Server is running.")
}

)