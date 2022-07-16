const object ={
    id:1,
    username:"raed",
    email:"raed@gmail.com",
}

const artworkmodel = require("../models/artwork-git")

const traitementsara = async(request,response)=>{
    
    let result = await artworkmodel.find({prix : 200})
    console.log(result)
    response.send(result)
}

const deletetraitement = async (request,response)=>{
    const result = await artworkmodel.deleteOne({ prix :200})
    console.log(result)
    response.send(result)

}

const posttraitement = (request,response)=>{
    const input = request.body
    let artwork = new artworkmodel ({Title: input.Title , category: input.category, description: input.description, prix: input.prix, image:input.image});
    artworkmodel.create(artwork)
    response.send(artwork)
   
}
const puttraitement = async (request,response)=>{
    let input = request.body
    console.log("params", request.params)
    console.log("queries", request.query)
    let result = await artworkmodel.findByIdAndUpdate(request.params.id , input, {new : true})
    console.log("updated succefully")
    response.send(result)
}

const controller ={
    traitementsara,
    deletetraitement,
    posttraitement,
    puttraitement
};

module.exports = controller;