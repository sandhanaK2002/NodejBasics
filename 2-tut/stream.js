const fs = require('fs')
const path = require('path')

const rs =  fs.createReadStream(path.join(__dirname , "files" , "lorem.txt") , {encoding: "utf8"});

const ws =  fs.createWriteStream(path.join(__dirname , "files" , "newlorem.txt"))



console.log((path.join(__dirname , "files" , "starter.txt")))

// rs.on("data" , (chunk)=>{
//     ws.write(chunk)
// })


//rs.pipe(ws) {more efficent then above}