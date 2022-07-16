const express = require ("express");
const { traitementsara } = require("../controllers/artwork-git");
var route = express.Router()

const controller = require("../controllers/artwork-git");

route.get("/sara",controller.traitementsara) //creation d'un api get
route.delete("/sara",controller.deletetraitement) //creation d'un api get
route.post("/sara",controller.posttraitement) //creation d'un api get
route.put("/sara/:id",controller.puttraitement) //creation d'un api get


module.exports = route