const { string } = require("joi");
const  Mongoose  = require("mongoose");
//create Admin schema 
const admin_schema =Mongoose.Schema({

    AdminName:{type:String},
    AdminEmile :{type:String},
    Password :{type:String},
    ratingID:{type:Mongoose.Schema.Types.ObjectId,ref:'Rating'},

},{
   timestamps:true
}

) 
module.exports = Mongoose.model('admin',admin_schema)