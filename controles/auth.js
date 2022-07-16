const { request, response } = require("express")
const userModel=require("./../models/user_model")

const register = (request,response)=>{
    const input = request.body
    console.log(request.body)
    
    let user =new userModel({
        userName : input.userName,
        password : input.password,
        mailAdress : input.mailadress,
        adress : input.adress,
        phone_number : input.phone_number,
        job : input.job,

    })
    userModel.create(user)
    response.send(user)

}



const authentification = {
    register,

}
module.exports= authentification