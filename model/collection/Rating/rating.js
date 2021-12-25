const { string } = require("joi");
const  Mongoose  = require("mongoose");
//create Rating schema 
const Rating =Mongoose.Schema({

    Rate_value :{type:String},

    Date :{type:String},
    
   

},{
   timestamps:true
}

) 
module.exports = Mongoose.model('Rating',Rating)