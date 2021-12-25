//model Transportation schema
const transportation_schema = require('../../../model/collection/transportation_schema/Transportation_Schema');
//create deleteTransportation

const deleteTransportation = async (req,res,next) => {

    try{
        
        const {id} = req.params;
        
        
        const Transportation = await transportation_schema.findOne({ _id: id});
        if (Transportation) {
        
           const deletedTransportation = await transportation_schema.findOneAndDelete({_id: id})
            res.json({message:"Done deleted Transportation",deletedTransportation})
        
        }else
        {
            res.json({error:"in-valid deleted Transportation"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {deleteTransportation}