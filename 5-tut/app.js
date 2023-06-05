const express =  require('express');
const app = express();


const port =  process.env.PORT || 8080


//Built In MiddleWare to handle url encoded data 
// in other words form data 
// content-type : application /x-www-form-urlencoded
app.use(express.urlencoded({extension: false}))


// built in middleware for json 
app.use(express.json())


// serve static files  

app.use(express.static(path.join(__dirname , "/public")))














//APPLICATION LEVEL MIDDLEWARE
const loggermiddleware =  (req , res , next)=>{
    console.log(`${new Date()} --request [${req.method}] [${req.url}]`)
    next()
}

app.use(loggermiddleware)

const usefilter =  (req , res, next)=>{
    if (req.query.search){
        console.log("u can access")
    }else {
        console.log("u cannot")
    }
}

app.use(usefilter)







// MIDDLEWARE 
//THIRD PART 
//BUILT IN 
//router level 
//error handling 

app.listen(port , ()=>{
    console.log("server connected to port " + port)
})




