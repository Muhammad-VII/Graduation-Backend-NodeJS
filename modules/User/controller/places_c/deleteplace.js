//model place schema
const placeschema = require('../../../../model/collection/places_schema/placeschema')
//create deleteplace

const deleteplace = async (req,res,next) => {

    try{
        
        const {id} = req.params;
        
        
        const place = await placeschema.findOne({ _id: id});
        if (place) {
        
           const deletedplace = await placeschema.findOneAndDelete({_id: id})
            res.json({message:"Done deletedplace",deletedplace})
        
        }else
        {
            res.json({error:"in-valid user"})
        }
    }catch(error){
        res.json({error:"catch  error",error})
    }


}

module.exports = {deleteplace}