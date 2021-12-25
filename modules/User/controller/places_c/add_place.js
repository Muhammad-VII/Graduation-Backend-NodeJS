//model place schema
const placeschema = require('../../../../model/collection/places_schema/placeschema')
//becrypt
const becrypt = require('bcrypt');
//create Place 
const createplace =async (req,res,next)=>{
    //  Superket,Bank,Police_station,Gas_station,Hotels,Malls,Schools,Colleges,Restaurants,Clubs,Hospitals,Telecoms

try {

const {Superket,Bank,Police_station,Gas_station,Hotels,Malls,Schools,Colleges,Restaurants,Clubs,Hospitals,Telecoms} = req.body;

    const Place = await placeschema.insertMany({Superket,Bank,Police_station,Gas_station,Hotels,Malls,Schools,Colleges,Restaurants,Clubs,Hospitals,Telecoms})
    res.json({message:' success  ',Place})

  }   catch (error) {
           res.json({err:' carch error ',error})
          
       }
    }
//==============================================


module.exports = {createplace}


