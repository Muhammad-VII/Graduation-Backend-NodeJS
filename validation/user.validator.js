const { body,param} = require('express-validator');

//create add users valdation
let signupvalidator =
[
    //optional ==>>this allows him to enter the element with valdation or without rashmeshhhhy 
    // matches ==>>this takes something called reigler experience allows me to write letters or numbers arabic or english
    body('Full_Name').optional().matches(),
    body('emile').isEmail(),
    body('password').isStrongPassword(),

    //check password I see him. cpassword 
    body('cpassword').custom((value,{req})=>{
        if (value !== req.body.password) {

         throw new Error('Password confirmation does not match password');
 
        }
        return true
    }),
    body('B_date').isString(),
    body('phone').isMobilePhone(),
    body('Gender').isString(),
    body('Longitude').isString(),
    body('Latitude').isString(),
    body('Bus_ID').isString(),
]
const signinvalidator = [

    body('emile').isEmail(),
    body('password').isStrongPassword()

]
const get_user_validation =[

    param('id').isString()
 
]
const updatevalidator = [

    body('Full_Name').isString(),
    param('id').isString(),

]
const deletvalidator = [

    param('id').isString()

]
module.exports = {signupvalidator,signinvalidator,get_user_validation,updatevalidator,deletvalidator}