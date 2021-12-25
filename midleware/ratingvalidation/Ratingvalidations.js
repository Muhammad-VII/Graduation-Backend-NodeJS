const { body,param} = require('express-validator');

const Ratingvalidator =[

    body("Rate_value").isString(),
    body("Date").isString(),
    body("userID").isString(),

]
const getRatingvalidation =[
param('id').isString()
]

const update_Rating_validator = [
        
            body('Rate_value').isString(),
            param('id').isString(),
        
        ]
 const delete_Rating_validator = [
        
            param('id').isString()
        
        ]
module.exports = {Ratingvalidator,getRatingvalidation,update_Rating_validator,delete_Rating_validator};