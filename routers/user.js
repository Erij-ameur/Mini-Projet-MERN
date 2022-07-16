const express = require("express")
var route = express.Router()
const userController = require("./../controllers/user")
var middleware = require("./../middlewares/datacheck")
var MiddlewareAuth =require("./../middlewares/auth")

route.post("/register", userController.register) 

route.post("/login",middleware, userController.login)

route.post("/me",MiddlewareAuth,userController.me)

route.get("/inscription", userController.getInscription) 

route.get("/inscription/:id", userController.getByIdInscription)

route.put("/inscription",userController.putManyInscription)

route.put("/inscription/update/:id", userController.putByIdInscription) 

route.delete("/inscription/delete/:id", userController.deleteByIdInscription) 

route.delete("/inscription",userController.deleteManyInscription)

module.exports = route