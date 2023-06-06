const express = require('express')
const {insertUser} =  require("../controller/usercontroller")
const userRoute =  express()


// Set up handlebars as the template engine    
userRoute.set("view engine" , "pug" )
userRoute.set("views" , "./views")

// Set up body-parser middleware to parse form data
userRoute.use(express.json())
userRoute.use(express.urlencoded({ extended: false }));


// Register Handler
userRoute.get("/register" , (req,res)=>{
    res.render("Register")   
})

userRoute.post("/register" , insertUser)


module.exports = userRoute


