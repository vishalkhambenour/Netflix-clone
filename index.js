const express = require('express');
require('dotenv').config()
const connectTOMOngo = require('./db/connection')
const router = require('./routes/netflix.routes');
const userroutes= require("./routes/user.routes");
const movierouts=require("./routes/movies.routes")
const auth = require('./helpers/auth');


const app= express()
app.use(express.json())

app.use("/api/netflix",router)
app.use("/api/users",userroutes)
app.use("/api/movies",movierouts)


app.all("*",(req,res)=>{
    res.status(404).json({error:true,message:"Page Not Found"})
})

app.use((err,req,res,next)=>{
    console.log("hiii i am error handelling middle wear")
    if(err.statuscode){
        return res.status(err.statuscode).json({error:true,message:err.message})
    }
    return res.status(500).json({error:true,message:err.message}) 
})


let startserver=async()=>{
    try {
        app.listen(process.env.DEV_PORT,()=>{
            console.log(`Server is running on port ${process.env.DEV_PORT}`)
        })
        await connectTOMOngo(process.env.DEV_MONGODB)
        console.log("Mongodb connected sucessfully")
    } catch (error) {
        console.log(error)
    }
}
startserver()