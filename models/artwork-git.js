const mongoose = require ("mongoose")

const artwork=new mongoose.Schema(
    {   
        Title:{type:String},
        category:{type:String},
        description:{type:String},
        prix:{type:Number},
        image:{type:String}
    },
    {timestamps:true}
);

const artworkmodel =  mongoose.model("artwork",artwork)

module.exports = artworkmodel ;