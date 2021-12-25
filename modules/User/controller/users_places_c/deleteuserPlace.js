//model user_place schema
const UsersPlacesSchema = require('../../../../model/collection/users_places_schema/UsersPlacesSchema')
//create deleteuser_place

const deleteuserplace = async (req,res,next) => {

    try{
        
        const {id} = req.params;
        
        
        const user_place = await UsersPlacesSchema.findOne({ _id: id});
        if (user_place) {
        
           const deleted_user_place = await UsersPlacesSchema.findOneAndDelete({_id: id})
            res.json({message:"Done deleted user place",deleted_user_place})
        
        }else
        {
            res.json({error:"in-valid user place"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {deleteuserplace}