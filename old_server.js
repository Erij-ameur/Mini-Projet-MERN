const { request, response } = require("express")
const express = require("express")
const { route } = require("./routers/users")
require("./db/connection")
var server = express()
var PORT = 5000

server.use(route)
const user = {
    id : 1230,
    name : "Dalel",
    mail : "email@gmail.com"
}


const getInscription = (request,response)=>{
    console.log(request)
    response.send("user readed")

}
const postInscription = (request,response)=>{
    console.log(request)
    response.send("user created")

}
const putInscription = (request,response)=>{
    console.log(request)
    response.send(" user updated")

}
const deleteInscription = (request,response)=>{
    console.log(request)
    response.send(" user deleted")

}
server.post("/inscription", postInscription) // create API Create
server.get("/inscription", getInscription) // create API Read
server.put("/inscription", putInscription) // create API  Update
server.delete("/inscription", deleteInscription) // create API Delete
server.listen(PORT, ()=>{
    console.log(`server is running on : ${PORT}`)
}


)