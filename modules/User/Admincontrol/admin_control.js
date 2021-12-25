const express = require('express');
const { Admingvalidator ,getAdminvalidation,updateAdminvalidator,deleteAdminvalidator} = require('../../../midleware/adminsvalidation/Adminsvalidations');
const { isvalid } = require('../../../midleware/handelValidation');
const { creatAdmin } = require('../controller/AddAdmins/addadmin');
const { getAdmin } = require('../controller/AddAdmins/getAdmins');
const { deletAdming } = require('../controller/AddAdmins/deleteAdmin');
const { updateAdming } = require('../controller/AddAdmins/UpdateAdmin');

const router =express.Router();

//create Admin
router.post('/createAdmin',Admingvalidator,isvalid(),creatAdmin);
//get Admin
router.get('/getAdmin/:id',getAdminvalidation,isvalid(),getAdmin);
//create delete Admin 
router.delete('/deletAdmin/:id',deleteAdminvalidator,isvalid(),deletAdming)
//create updateuser Admin 
router.patch('/updateAdming/:id',updateAdminvalidator,isvalid(),updateAdming)

module.exports = router;