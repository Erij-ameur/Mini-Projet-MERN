const express=require("express")
var route=express.Router()
const ArtWorkController=require("./../controllers/ArtWork")
var MiddlewareAuth =require("./../middlewares/auth")

route.post("/trait",MiddlewareAuth,ArtWorkController.postTraitement)   
 
route.get("/trait",MiddlewareAuth,ArtWorkController.getAllTraitement)

route.get("/trait/:id",MiddlewareAuth,ArtWorkController.getByIdTraitement)  

route.put("/trait/:id",MiddlewareAuth,ArtWorkController.putByIdTraitement)

route.put("/trait",MiddlewareAuth,ArtWorkController.putManyTraitement)   

route.delete("/trait/:id",MiddlewareAuth,ArtWorkController.deleteByIdTraitement)    

route.delete("/trait",MiddlewareAuth,ArtWorkController.deleteManyTraitement)   

module.exports=route


