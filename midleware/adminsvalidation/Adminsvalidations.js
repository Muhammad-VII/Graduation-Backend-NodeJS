const { body,param} = require('express-validator');

const Admingvalidator =[

    body("AdminName").isString(),
    body("AdminEmile").isEmail(),
    body("Password").isStrongPassword(),
    // Check password I see him. cpassword 
 body('cpassword').custom((value,{req})=>{
    if (value !== req.body.Password) {

     throw new Error('Password confirmation does not match password');

    }
    return true
}),
    body("ratingID").isString(),

]
const getAdminvalidation =[
param('id').isString()
]


const updateAdminvalidator = [

    body('AdminName').isString(),
    param('id').isString(),

]
const deleteAdminvalidator = [

    param('id').isString()

]
module.exports = {Admingvalidator,getAdminvalidation,updateAdminvalidator,deleteAdminvalidator};


