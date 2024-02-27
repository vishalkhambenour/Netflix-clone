const express = require('express')
const { Register, login } = require('../controller/user.controller')



let router=express.Router()

router.post("/register",Register)
router.post("/login",login)

module.exports=router