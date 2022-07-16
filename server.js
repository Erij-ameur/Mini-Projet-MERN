
const express = require("express")
const ArtWorkRouter= require("./routers/ArtWork")
const UserRouter=require("./routers/user")
require("./DB/connexion")
var server = express()
var port=5007


server.use(express.json())
server.use(ArtWorkRouter)
server.use(UserRouter)


server.listen(port,()=>{
console.log(`serverk yemchi port: ${port}`)
})