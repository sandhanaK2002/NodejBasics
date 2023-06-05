const http =  require('http');

const port  =  process.env.PORT || 3500




const server = http.createServer((req, res)=>{


})



server.listen(port, ()=>{
    console.log("sever running on port 3500")
})