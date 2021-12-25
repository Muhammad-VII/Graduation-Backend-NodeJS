//model place schema
const placeschema = require('../../../../model/collection/places_schema/placeschema')
//create updaterating

const updateplace = async (req,res,next) => {

    try{
        
////////////////////////////////////////        
        const {Superket,Bank,Police_station,Gas_station,Hotels,Malls,Schools,Colleges,Restaurants,Clubs,Hospitals,Telecoms} = req.body;
//////////////////////////////////////////        
        const {id} = req.params;
        
        
        const place = await placeschema.findOne({ _id: id});
        if (place) {
        ////////////////////////////////////////////////////////////////////////
           const updatedplace = await placeschema.findByIdAndUpdate({_id:id},{Superket,Bank,Police_station,Gas_station,Hotels,Malls,Schools,Colleges,Restaurants,Clubs,Hospitals,Telecoms})
        ///////////////////////////////////////////////////////////////////////////   
            res.json({message:"Done updatedplace",updatedplace})
        
        }else
        {
            res.json({error:"in-valid updatedplace"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {updateplace}