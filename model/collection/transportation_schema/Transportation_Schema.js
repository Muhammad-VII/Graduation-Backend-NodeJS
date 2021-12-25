const { string } = require("joi");
const  Mongoose  = require("mongoose");
//create Transportation_Schema
const transportation_schema =Mongoose.Schema({

    Bus_number :{type:String},
    Where_to :{type:String},

},{
   timestamps:true
}

) 
module.exports = Mongoose.model('transportation',transportation_schema)