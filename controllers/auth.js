const Joi = require("joi")
const user = require ("../models/auth")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const register = async (req,res)=>{

    let input = req.body

    let existuser = await user.findOne({email : input.email});
    if(existuser){
        return res.status(400).json ({message : "email already exist ! "})
    }


    let hashedpassword = await bcrypt.hash(input.password, 12);
    input.password = hashedpassword

    let newuser = new user(input)
    await user
    .create(newuser)
    .then((result) => {
        return res.status(201).json(result);
    })
    .catch ((error) =>{
        return res.status(400).json(error);
    })
}

const signin = async (req,res) => {
    try {
        // inputs
        var body = req.body
        // validation
        const BodySchema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().min(4).required(),
        });
        const { error } = BodySchema.validate(body);
        if (error && error.details) {
            return res.status(400).json({ message: 'invalid_input_data', error });
        }

        const auth = await user.findOne({email : body.email});

        if(!auth)
            return res.status(404).json({ message: 'user_not_found' });

        const correctPass = await bcrypt.compare(body.password, auth.password );

        if(!correctPass)
            return res.status(403).json({ message: 'invalid_password' });

        const token = await jwt.sign({id: auth._id}, "raed123", {expiresIn: "24h"});

        res.cookie('token', token);

        return res.status(200).json({ token, user: auth });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'unknown_error_occurred', error });
    }
}

const controller ={
   register,
   signin,
};

module.exports = controller;