//model Transportation schema
const { model } = require('mongoose');
const transportation_schema = require('../../../model/collection/transportation_schema/Transportation_Schema');
//ADD Transportation
const AddTransportation = async (req,res,next) =>{



try{

    const {Bus_number,Where_to} = req.body;
    const Transportation = await transportation_schema.insertMany({Bus_number,Where_to} )
    res.json({message:' success  ',Transportation})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }

    module.exports = {AddTransportation};

       








