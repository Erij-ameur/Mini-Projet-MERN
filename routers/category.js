const express = require ("express");
const { gettraitement} = require("../controllers/category");
var route = express.Router()

const controller = require("../controllers/category");

route.get("/category",controller.gettraitement) 
route.delete("/category",controller.deletetraitement) 
route.post("/category",controller.posttraitement) 
route.put("/category/:id",controller.puttraitement) 


module.exports = route