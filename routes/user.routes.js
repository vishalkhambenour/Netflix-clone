const express = require('express')
const { update, Delete, Getuser, Getallusers, stats } = require('../controller/user.controller')
const auth = require('../helpers/auth')


let router=express.Router()




router.put("/:id",auth,update)
router.delete("/:id",auth,Delete)
router.get("/find/:id",Getuser)
router.get("/",auth,Getallusers)
router.get("/stats",stats)


module.exports=router