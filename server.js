// node runs on server not on browser 
//node has global object not window object 
// node js has some core modules 
//
const os = require("os")
const path = require("path")
const {add , subract  , mul , divide} =  require("./math.js")

//console.log(global)
//console.log(os.version())
//console.log(os.type())
//console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log(path.basename(__filename ))
console.log(path.extname(__filename ))

//console.log(add(2,3))

