// when an event emits and callback is trigerred
//Every action on a computer is an event. Like when a connection is made or a file is opened.
//Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:
const events = require('events')


const eventEmitter =  new events.EventEmitter()


eventEmitter.on("scream" , ()=>{
    console.log("scream started")
})

eventEmitter.emit("scream")

