const express = require("express")
const userRouter = require("./routers/users")
require("./db/connection")
var server = express();
var PORT = 5000
server.use(express.json())
server.use(userRouter)
server.listen(PORT, ()=>{
    console.log(`server is running on : ${PORT}`)
}
)

