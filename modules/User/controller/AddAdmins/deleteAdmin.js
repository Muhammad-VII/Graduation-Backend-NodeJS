//model Admingschema 
const Admingschema = require('../../../../model/collection/Admin_s/adminschema');
//create deletAdming

const deletAdming = async (req,res,next) => {

    try{
        
        const {id} = req.params;
        
        
        const adming = await Admingschema.findOne({ _id: id});
        if (adming) {
        
           const deletedadming = await Admingschema.findOneAndDelete({_id: id})
            res.json({message:"Done deleted adming",deletedadming})
        
        }else
        {
            res.json({error:"in-valid deleted adming"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {deletAdming}