import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import routes from "./routes/index"
import session = require("express-session")
import MongoStore = require("connect-mongo")


dotenv.config()

const app = express()
const port = 8080;
const mongoURI  = process.env.MONGO_URI as string

app.use(cors({
    credentials : true,
    origin :"http://localhost:5173"

}))
app.use(express.json())
app.use(session({
    resave:false,
    saveUninitialized:true,
    cookie : {secure : false,httpOnly:true,maxAge: 1000 * 60 * 60 * 24,sameSite:"lax"},
    secret : process.env.SESSION_SECRET,
    store : MongoStore.create({mongoUrl:mongoURI}),
    
}))
app.use(routes)

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

