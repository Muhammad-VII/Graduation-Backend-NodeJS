//model Admingschema
const Admingschema = require('../../../../model/collection/Admin_s/adminschema');
//create updateAdming

const updateAdming = async (req,res,next) => {

    try{
        
        const {AdminName} = req.body;
        const {id} = req.params;
        
        
        const user = await Admingschema.findOne({ _id: id});
        if (user) {
        
           const updatedadming = await Admingschema.findByIdAndUpdate({_id:id},{AdminName})
            res.json({message:"Done updatedadming",updatedadming})
        
        }else
        {
            res.json({error:"in-valid updatedadming"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {updateAdming}