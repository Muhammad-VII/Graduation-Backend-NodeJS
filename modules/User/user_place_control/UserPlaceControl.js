const express = require('express');
const {addUserPlacesvalidator,getUserPlacesvalidation,update_UserPlaces_validator,delete_UserPlaces_validator} = require('../../../midleware/user_places_validation/User_Places_Validation');
const { isvalid } = require('../../../midleware/handelValidation');
const { creatuserplace } = require('../controller/users_places_c/add_user_pleces');
const { getuserplace} = require('../controller/users_places_c/getuseplasec');
const { deleteuserplace } = require('../controller/users_places_c/deleteuserPlace');
const { updateUsersPlaces } = require('../controller/users_places_c/UpdateuserPlace');


const router =express.Router();

//create UserPlaces
router.post('/creatuserplace',addUserPlacesvalidator,isvalid(),creatuserplace);
//getuserplace
router.get('/getuserplace',getUserPlacesvalidation,isvalid(),getuserplace);

//create deleteuserplace
router.delete('/deleteuserplace/:id',delete_UserPlaces_validator,isvalid(),deleteuserplace)
//create updateUsersPlaces
router.patch('/updateUsersPlaces/:id',update_UserPlaces_validator,isvalid(),updateUsersPlaces)

module.exports = router;