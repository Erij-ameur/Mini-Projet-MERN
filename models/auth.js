const mongoose = require ("mongoose")

const user = new mongoose.Schema(
    {   
        username :{type:String},
        email : {
            type : String,
            required:true
        },

        password : {
            type: String,
            required : true,
        }
    },
    {timestamps:true}
);

const auth =  mongoose.model("user",user)

module.exports = auth ;