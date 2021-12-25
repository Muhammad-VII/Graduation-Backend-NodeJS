const { body,param} = require('express-validator');

const addUserPlacesvalidator =[

    body("userID").isString(),
    body("placeID").isString()


]
const getUserPlacesvalidation =[

               param('id').isString()
       
            
]

    
const update_UserPlaces_validator = [
            
                body('userID_fk').isString(),
                body('placeID_fk').isString(),
                param('id').isString(),
]
const delete_UserPlaces_validator = [
            
                param('id').isString()
            
            ]
module.exports = {addUserPlacesvalidator,getUserPlacesvalidation,update_UserPlaces_validator,delete_UserPlaces_validator};