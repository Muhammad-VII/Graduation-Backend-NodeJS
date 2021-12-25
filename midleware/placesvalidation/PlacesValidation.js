const { body,param } = require('express-validator');

const Placesvalidator =[

    body("Superket").isString(),
    body("Bank").isString(),
    body("Police_station").isString(),
    body("Gas_station").isString(),
    body("Hotels").isString(),
    body("Malls").isString(),
    body("Schools").isString(),
    body("Colleges").isString(),
    body("Restaurants").isString(),
    body("Clubs").isString(),
    body("Hospitals").isString(),
    body("Telecoms").isString()

]
const get_Places_validation =[
param('id').isString(),
]
    const update_Places_validator = [
    
        body("Superket").isString(),
        body("Bank").isString(),
        body("Police_station").isString(),
        body("Gas_station").isString(),
        body("Hotels").isString(),
        body("Malls").isString(),
        body("Schools").isString(),
        body("Colleges").isString(),
        body("Restaurants").isString(),
        body("Clubs").isString(),
        body("Hospitals").isString(),
        body("Telecoms").isString(),
        param('id').isString(),
    
    ]
    const delete_Places_validator = [
    
        param('id').isString()
    
    ]
module.exports = {Placesvalidator,get_Places_validation,update_Places_validator,delete_Places_validator};