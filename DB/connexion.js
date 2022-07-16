const mongoose = require ("mongoose")
var uri = "mongodb+srv://JIGOKU_ACE:raed123@cluster0.h2vtgau.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri,(error)=>{
    if(error){
        console.log("error in db connexion : ", error)
    }else{
        console.log("connect to DB")
    }
})