const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity=require('joi-password-complexity')
const userSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
});
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this_id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
};
const user = mongoose.model("user",userSchema)

const validate = (data)=>{
    const schema = Joi.object({
        name:joi.String().required().label("Name"),
        email:joi.String().required().label("email"),
        password:joi.passwordComplexity.required().label("password"),
    });
    return schema.validate(data)
}
module.export={user,validate}