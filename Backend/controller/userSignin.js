const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req,res){
try{
   const {email,password} = req.body
    
   if(!email){
    throw new Error("Please Provide the Email");
   }

   if(!password){
    throw new Error("Please Provide the Password");
   }

   const user = await userModel.findOne({email});

   if(!user){
    throw new Error("User Not Found");
   }

   const checkPassword = await bcrypt.compare(password,user.password);

   if(checkPassword){
    const tokenData = {
        _id : user._id,
        email : user.email,
    }
     const token = await jwt.sign(tokenData,
     process.env.TOKEN_SECRET_KEY,{ expiresIn : 60 * 60 *12 })

    const tokenOption = {
      httpOnly : true,
      secure : true
    }

     res.cookie("Token",token,tokenOption).status(200).json({
      message : "Login Succesfully",
      data : token,
      success : true,
      error : false
     })
   }
   
   else{
    throw new Error("Please Check Password")
   }
   

}catch(err){
    res.json({
        message : err.message || err ,
        error : true,
        success : true,
       })
  }
}


module.exports = userSignInController