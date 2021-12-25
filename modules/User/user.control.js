const express = require('express');
const { createuser } = require('./controller/adduser');
const { signIn } = require('./controller/signinuser');
const { isvalid } = require('../../midleware/handelValidation');
const {  signupvalidator, updatevalidator ,get_user_validation} = require('../../validation/user.validator');
const { signinvalidator} = require('../../validation/user.validator');
const { deletvalidator} = require('../../validation/user.validator');
const { getUser } = require('./controller/getuser');
const { updateuser } = require('./controller/UpdateUser');
const { deletuser } = require('./controller/deletuser');

const router = express.Router();

//create signup
router.post('/signup',signupvalidator,isvalid(),createuser);
//create signin
router.post('/signIn',signinvalidator,isvalid(),signIn)
// get user 
router.get('/getUser/:id',get_user_validation,isvalid(),getUser)
// update user 
router.patch('/updateuser/:id',updatevalidator,isvalid(),updateuser)
// delete user 
router.delete('/deletuser/:id',deletvalidator,isvalid(),deletuser)

module.exports = router;