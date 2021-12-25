const { body,param} = require('express-validator');

const add_transportation_validation =[

    body("Bus_number").isString(),
    body("Where_to").isString()


]
const get_transportation_validation =[

               param('id').isString()
            
]

    
const update_transportation_validation = [
            
                body('Where_to').isString(),
                body("Bus_number").isString(),
                param('id').isString()
]
const delete_transportation_validation = [
            
                param('id').isString()
            
            ]
module.exports = {add_transportation_validation,get_transportation_validation,update_transportation_validation,delete_transportation_validation};