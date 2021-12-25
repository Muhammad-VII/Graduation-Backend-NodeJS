const  Mongoose  = require("mongoose");
//create user schema
const userschema = Mongoose.Schema({


    Full_Name:{type:String},
    emile:{type:String},
    password:{type:String},
    B_date:{type:String},
    phone:{type:String},
    Gender:{type:String},
    Longitude:{type:String},
    Latitude:{type:String},
    Bus_ID:{type:Mongoose.Schema.Types.ObjectId,ref:'transportation'},
    role:{type:String,default:'user'}

},

{
    timestamps:true
}

) 
module.exports = Mongoose.model('regstration',userschema) 