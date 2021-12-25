const { string } = require("joi");
const  Mongoose  = require("mongoose");
//create places schema 
const places =Mongoose.Schema({


    Superket:{type:String},
    Bank:{type:String},
    Police_station:{type:String},
    Gas_station:{type:String},
    Hotels:{type:String},
    Malls:{type:String},
    Schools:{type:String},
    Colleges:{type:String},
    Restaurants:{type:String},
    Clubs:{type:String},
    Hospitals:{type:String},
    Telecoms:{type:String},
},

{
    timestamps:true
}

) 
module.exports = Mongoose.model('places',places)