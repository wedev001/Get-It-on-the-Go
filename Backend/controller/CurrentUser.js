const userModel = require("../models/userModel")

async function CurrentUser(req,res){
   try{
 
    const CurrentUser = await userModel.findById(req.userId)
  
  res.json({
    message : "Current User",
    data : CurrentUser,
    success : true,
    error : false


  })
   }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
   }
}

module.exports = CurrentUser