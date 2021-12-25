//model admin schema
const { model } = require('mongoose');
const Admingschema = require('../../../../model/collection/Admin_s/adminschema');
//get admin
const getAdmin = async (req,res,next) =>{



try{

    const {id}= req.params;
    const admin = await Admingschema.find({userID: id}).populate('ratingID','-AdminName')
    res.json({message:' succese  ',admin})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }

    module.exports = {getAdmin};