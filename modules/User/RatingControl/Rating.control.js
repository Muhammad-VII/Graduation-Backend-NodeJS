const express = require('express');
const { Ratingvalidator ,getRatingvalidation,delete_Rating_validator,update_Rating_validator} = require('../../../midleware/ratingvalidation/Ratingvalidations');
const { isvalid } = require('../../../midleware/handelValidation');
const { creatrating } = require('../controller/AddRating/addRating');
const { getRating } = require('../controller/AddRating/getRating');
const { deletrating } = require('../controller/AddRating/deleteRating');
const { updaterating } = require('../controller/AddRating/UpdateRating');
const router =express.Router();

//create Rating
router.post('/creatrating',Ratingvalidator,isvalid(),creatrating);
//get Rating
router.get('/getRating/:id',getRatingvalidation,isvalid(),getRating);

//create delet user 
router.delete('/deletrating/:id',delete_Rating_validator,isvalid(),deletrating)

//create update user 
router.patch('/updaterating/:id',update_Rating_validator,isvalid(),updaterating)

module.exports = router;