const mongoose =  require("mongoose")
const express = require("express")
const userRoute = require("./routes/userroutes")

const app = express()

const PORT =  process.env.PORT || 3500

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

mongoose.connect("mongodb://127.0.0.1:27017/Students" , connectionOptions)
.then(()=> console.log("connected to MongoDB"))
.catch((err)=> console.log(err))



app.use(userRoute)




app.listen(PORT , ()=>{
    console.log("connected to server" + PORT)
})

