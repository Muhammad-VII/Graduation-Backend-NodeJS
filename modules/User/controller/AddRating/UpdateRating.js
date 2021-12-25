//model ratingschema 
const Ratingschema = require('../../../../model/collection/Rating/rating');
//create updaterating

const updaterating = async (req,res,next) => {

    try{
        
        const {Rate_value} = req.body;
        const {id} = req.params;
        
        
        const user = await Ratingschema.findOne({ _id:id});
        if (user) {
        
           const updatedrating = await Ratingschema.findByIdAndUpdate({_id:id},{Rate_value})
            res.json({message:"Done updatedrating",updatedrating})
        
        }else
        {
            res.json({error:"in-valid updatedrating"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {updaterating}