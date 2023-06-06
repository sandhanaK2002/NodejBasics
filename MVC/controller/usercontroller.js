const User =  require("../models/usermodel")


const insertUser = async (req , res)=>{

try{

    const adduser =  new User({
        name : req.body.name,
        username: req.body.username,
        email : req.body.email,
        street:req.body.street,
        city : req.body.city,
        state: req.body.state,
        country:req.body.country,
        postalcode:req.body.postalcode
    })  

    const result = await adduser.save()
    res.send("form submitter successfully " + result )

}catch(err){
    console.log(err.message)
}



}


module.exports = {insertUser}