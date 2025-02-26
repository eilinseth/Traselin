import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import routes from "./routes/index"


dotenv.config()

const session = require("express-session")
const app = express()
const port = 8080;
const mongoURI  = process.env.MONGO_URI as string

app.use(cors({
    credentials : true
}))
app.use(express.json())
app.use(routes)
app.use(session({
    resave:false,
    saveUninitialized:false,
    cookie : {secure : false,httpOnly:true},
    secret : process.env.SESSION_SECRET
}))

mongoose
.connect(mongoURI)
.then(() => {
    app.listen(port, ()=>{
        console.log(`App is listening to port ${port}`)
    })
})
.catch((error) => {
    throw error
})

