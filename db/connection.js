// const mongoose = require('mongoose')

const { default: mongoose } = require("mongoose")


let connectTOMOngo=(url)=>{

    return mongoose.connect(url)
    ,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}

}

module.exports=connectTOMOngo