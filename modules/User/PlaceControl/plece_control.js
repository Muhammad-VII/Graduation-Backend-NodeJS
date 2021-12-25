const express = require('express');
const { createplace } = require('../controller/places_c/add_place');
const { isvalid } = require('../../../midleware/handelValidation');
const {Placesvalidator,get_Places_validation,update_Places_validator,delete_Places_validator} = require('../../../midleware/placesvalidation/PlacesValidation');
const { getplace} = require('../controller/places_c/getplec');
const { deleteplace } = require('../controller/places_c/deleteplace');
const { updateplace } = require('../controller/places_c/Updateplce');

const router =express.Router();

//create createplace
router.post('/createplace',Placesvalidator,isvalid(),createplace);
//create  get  place
router.get('/getplace/:id',get_Places_validation,isvalid(),getplace)
//create update place 
router.patch('/updateplace/:id',update_Places_validator,isvalid(),updateplace)

//create delet place 
router.delete('/deleteplace/:id',delete_Places_validator,isvalid(),deleteplace)

module.exports = router;