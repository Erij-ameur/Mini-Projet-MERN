const express = require ("express")
require("./db/connexion")
const auth = require ("./routers/auth") 
var server = express()
var port = 5007

server.use(express.json())
server.use(auth)


server.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})