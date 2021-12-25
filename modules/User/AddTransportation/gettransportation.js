//model Transportation schema
const transportation_schema = require('../../../model/collection/transportation_schema/Transportation_Schema');
//get Transportation
const getTransportation = async (req,res,next) =>{



try{

    const {id}= req.params;
    const Transportation = await transportation_schema.find({_id:id})
    res.json({message:' succese  ',Transportation})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }

    module.exports = {getTransportation};