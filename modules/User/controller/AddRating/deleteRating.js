//model ratingschema 
const Ratingschema = require('../../../../model/collection/Rating/rating');
//create deletrating

const deletrating = async (req,res,next) => {

    try{
        
        const {id} = req.params;
        
        
        const rating = await Ratingschema.findOne({ _id: id});
        if (rating) {
        
           const deletedrating = await Ratingschema.findOneAndDelete({_id: id})
            res.json({message:"Done deleted rating",deletedrating})
        
        }else
        {
            res.json({error:"in-valid deleted rating"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {deletrating}