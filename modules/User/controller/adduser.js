//model user schema
const userschema = require('../../../model/collection/userschema')
//becrypt
const becrypt = require('bcrypt');
//create user 
const createuser =async (req,res,next)=>{
  
try {
    const {Full_Name,emile,password,B_date,phone,Gender,Longitude,Latitude,Bus_ID} = req.body;
    const get_user_emile = await userschema.findOne({emile})
     if (get_user_emile) { res.json({err:'user already exist'})}else{

 /*Here I will encrypt the word word and see if it was done has encryption or not if it was done I will take it in the hash if it is done it will get a message for 
him erroHere I will encrypt the word word and see if it was done has encryption or not if it was done I will take it in the hash if it was done it will get a message for him error*/
   
    becrypt.hash(password,8,async(err,hash)=>{

    if (err) {
        res.json({err:'user already exist',err})
    }else{
    const User = await userschema.insertMany({Full_Name,emile,password:hash,B_date,phone,Gender,Longitude,Latitude,Bus_ID})

    res.json({message:'Done ',User})
    }
    })
     }
    

}   catch (error) {
    res.json({err:' carch error ',error})
   
}
}

//==============================================


module.exports = {createuser}


