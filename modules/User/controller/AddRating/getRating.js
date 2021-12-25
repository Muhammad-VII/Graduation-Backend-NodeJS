//model Rating schema
const { model } = require('mongoose');
const Ratingschema = require('../../../../model/collection/Rating/rating');
//get Rating
const getRating = async (req,res,next) =>{



try{

    const {id}= req.params;
    const rating = await Ratingschema.find({userID: id}).populate('userID','-Full_Name')
    res.json({message:' succese  ',rating})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }

    module.exports = {getRating};