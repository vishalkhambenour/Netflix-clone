const jwt = require('jsonwebtoken')
require("dotenv").config

let auth=(req,res,next)=>{

    try {
        
        let Mytoken = req.headers.authorization
        if(!Mytoken || !Mytoken.startsWith("Bearer")){
            return res.status(406).json({error:true,message:"Token Required"})
        }
        let token= Mytoken.split(" ")[1]  
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err) res.status(403).json({error:true,message:"Token is not valid"})
            req.user=user
        next()
        })
    } catch (error) {
        next(error)
    }
}
module.exports=auth



