const express = require('express')
const {registerUser,loginUser,findUser,getUsers} = require('../Controllers/userController')

const routre = express.Router();


routre.post("/register",registerUser)
routre.post("/login",loginUser)
routre.get("/find/:userId",findUser)
routre.get("/",getUsers)

module.exports = routre  
