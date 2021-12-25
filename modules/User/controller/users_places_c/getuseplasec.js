//model Rating schema
const { model } = require('mongoose');

//model user_place schema
const UsersPlacesSchema = require('../../../../model/collection/users_places_schema/UsersPlacesSchema')
//get userplace
const getuserplace = async (req,res,next) =>{



try{

    const {id_u}= req.params;
    const {id_p}= req.params;

    const userID = await UsersPlacesSchema.find({_userID_fk:id_u}).populate('userID_fk','-Full_Name')
    const placeID = await UsersPlacesSchema.find({_placeID_fk:id_p}).populate('placeID_fk')
    res.json({message:' succese  ',userID,placeID})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }

    module.exports = {getuserplace};