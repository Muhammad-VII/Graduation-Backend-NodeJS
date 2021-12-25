//model user_place schema
const UsersPlacesSchema = require('../../../../model/collection/users_places_schema/UsersPlacesSchema')
//create updateUsersPlaces

const updateUsersPlaces = async (req,res,next) => {

    try{
        
////////////////////////////////////////        
        const {} = req.body;
//////////////////////////////////////////        
        const {id} = req.params;
        
        
        const user_place = await UsersPlacesSchema.findOne({ _id: id});
        if (user_place) {
        ////////////////////////////////////////////////////////////////////////
           const updatedUsersPlaces = await UsersPlacesSchema.findByIdAndUpdate({_id:id},{   })
        ///////////////////////////////////////////////////////////////////////////   
            res.json({message:"Done updated Users Places",updatedUsersPlaces})
        
        }else
        {
            res.json({error:"in-valid updated Users Places"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {updateUsersPlaces}