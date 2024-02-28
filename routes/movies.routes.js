const express = require('express')
const auth = require('../helpers/auth')
const { CreateMovie, updateMovie, DeleteMovie, GETMovie, GETRandomMovie, GetAllMovie } = require('../controller/movies.controller')


let router=express.Router()




router.post("/",auth,CreateMovie)
router.put("/:id",auth,updateMovie)
router.delete("/:id",auth,DeleteMovie)
router.get("/find/:id",auth,GETMovie)
router.get("/random",auth,GETRandomMovie)
router.get("/",auth,GetAllMovie)


module.exports=router