const fs = require("fs")

fs.readFile("./files/starte.txt" , "utf-8" , (err , data)=>{
    if(err) throw err
    console.log(data)
})

process.on('uncaughtException', (err)=>{
    console.log(`there was an uncaught error: ${err}`)
    process.exit(1)
})