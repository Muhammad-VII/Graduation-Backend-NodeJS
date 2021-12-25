const { string } = require("joi");
const  Mongoose  = require("mongoose");
//create UserPlacesrschema
const UserPlacesrschema =Mongoose.Schema({

    userID_fk :{type:Mongoose.Schema.Types.ObjectId,ref:'regstration'},
    placeID_fk:{type:Mongoose.Schema.Types.ObjectId,ref:'places'}

},{
   timestamps:true
}

) 
module.exports = Mongoose.model('UserPlacesr',UserPlacesrschema)


