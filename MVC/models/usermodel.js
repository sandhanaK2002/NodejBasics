const {Schema , model} =  require('mongoose');
const validator  = require('validator');




// Creating SC hema 

const addressSchema =  new Schema({
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: Number
})




const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate : {
            validator : function (value){
                return validator.isEmail(value)
            }
            
            
        }
    },

    address : addressSchema

})    



const User =  new model("User", userSchema)

module.exports = User