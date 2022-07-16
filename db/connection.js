const { request, response, default: mongoose } = require("mongoose")
const uri = "mongodb+srv://dalel_art:sastecskills@cluster0.dq8td.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri,(error)=>{
    if(error){
        console.log("error in db connection : ", error)
    }
    else{
        console.log("successfully connected to database")
    }

})
