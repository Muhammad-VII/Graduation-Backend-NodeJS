const express = require('express');
const {add_transportation_validation,get_transportation_validation,update_transportation_validation,delete_transportation_validation } = require('../../../midleware/transportation/transportation_validation');
const { isvalid } = require('../../../midleware/handelValidation');
const {AddTransportation  } = require('../../User/AddTransportation/addtransportation');
const { getTransportation } = require('../../User/AddTransportation/gettransportation');
const { deleteTransportation } = require('../../User/AddTransportation/deletetransportation');
const { UpdateTransportation } = require('../../User/AddTransportation/Updatetransportation');
const router =express.Router();

//create transportation
router.post('/AddTransportation',add_transportation_validation,isvalid(),AddTransportation);
//get transportation
router.get('/getTransportation/:id',get_transportation_validation,isvalid(),getTransportation);

//create delet transportation 
router.delete('/deleteTransportation/:id', delete_transportation_validation,isvalid(),deleteTransportation)

//create update transportation 
router.patch('/UpdateTransportation/:id',update_transportation_validation,isvalid(),UpdateTransportation)

module.exports = router;