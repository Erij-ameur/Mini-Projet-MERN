const express = require ("express");
const { register } = require("../controllers/auth");
var route = express.Router()

const controller = require("../controllers/auth");

route.post("/register",controller.register)
route.post("/signin",controller.signin)

module.exports = route