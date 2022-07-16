const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const mongoose = require("mongoose");
const user = mongoose.Schema({
    userName :{type:String},
    password :{type:String},
    mailadress :{type:String},
    adress : {type:Number},
    phone_number :{type: String},
    job :{type: String}
    
})
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const user_model = mongoose.model("user", user);
module.exports = user_model;
const validate = (data) => {
	const schema = Joi.object({
    	userName: Joi.string().required().label("User Name"),
		mailadress: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		adress: Joi.string().required().label("Adress"),
		phone_number: Joi.string().required().label("Phone number"),
		job: Joi.string().required().label("Job")
	});
	return schema.validate(data);
};

module.exports = { user_model, validate };




