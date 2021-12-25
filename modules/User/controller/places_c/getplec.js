//model Rating schema
const { model } = require('mongoose');
const Placeschema = require('../../../../model/collection/places_schema/placeschema');
//get place
const getplace = async (req,res,next) =>{



try{

    const {id}= req.params;
    const place = await Placeschema.find({_id: id})
    res.json({message:' succese  ',place})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }

    module.exports = {getplace};