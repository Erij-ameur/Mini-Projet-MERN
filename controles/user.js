const { request, response } = require("express")
const userModel=require("./../models/user_model")

const postInscription = (request,response)=>{
    const input = request.body
    console.log(request.body)
    
    let user =new userModel({
        userName : input.userName,
        password : input.password,
        mailAdress : input.mailadress,
        adress : input.adress,
        phone_number : input.phone_number,
        job : input.job
    })
    userModel.create(user)
    response.send(user)

}
const getbyID = async(request,response)=>{
    let allUsers = await userModel.findById("0000000")
    console.log(allUsers)
    response.send(allUsers)
}

// const getInscription = async(request,response)=>{
//     let user_found =await userModel.find()
//     console.log(user_found)
//     response.send( user_found)
// }
const getAll = async(request,response)=>{
    let all_users =await userModel.find()
    console.log(all_users)
    response.send( all_users)
}
// const putInscription = async (request,response)=>{
//     let user_updated = await userModel.updateOne({_id:"62c0374a4692a219337a7bb2"}, { $set: {userName:"sara", email:"sara@gmail.com"}})
//     response.send(user_updated)
//}
const putInscription = async (request,response)=>{
    const input = request.body
    console.log("params",request.params)
    console.log("querie",request.query)
    let user_updated = await userModel.findByIdAndUpdate(request.params.id,input, {
        new : true,
    })
    response.send(user_updated)
}

// const deleteInscription = (request,response)=>{
//     let user_deleted = userModel.deleteOne({ userName:"salah Gouja" }) 
//     console.log(user_deleted)
//     response.send(user_deleted)

// }
const deleteInscription =async (request,response)=>{
    let user_deleted = await userModel.findByIdAndDelete(request.params.id) 
  
    response.send(user_deleted)

}

const controller = {
    postInscription,
    putInscription,
    deleteInscription,
    getbyID,
    getAll
}
module.exports= controller