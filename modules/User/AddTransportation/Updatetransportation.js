//model Transportation schema
const transportation_schema = require('../../../model/collection/transportation_schema/Transportation_Schema');
//create updateTransportation

const UpdateTransportation = async (req,res,next) => {

    try{
        
        const {Bus_number,Where_to} = req.body;
        const {id} = req.params;
        
        
        const transportation = await transportation_schema.findOne({_id:id});
        if (transportation) {
        
           const updatedtransportation = await transportation_schema.findByIdAndUpdate({_id:id},{Bus_number,Where_to})
            res.json({message:"Done UpdateTransportation",updatedtransportation})
        
        }else
        {
            res.json({error:"in-valid UpdateTransportation"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {UpdateTransportation}