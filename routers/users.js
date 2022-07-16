const express = require("express")
var route = express.Router()
const controller = require("./../controles/user")
route.post("/inscription", controller.postInscription) // create API Create
route.get("/inscription", controller.getInscription) // create API Read
route.put("/inscription/update/:id", controller.putInscription) // create API  Update
route.delete("/inscription/delete/:id", controller.deleteInscription) // create API Delete
route.delete("/inscription/showbyID", controller.getbyID) // create API get user by ID
route.delete("/inscription/show_all", controller.getAll) // create API get user by ID


module.exports = route