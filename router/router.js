const userrouter = require("../modules/User/user.control");
const ratingrouter = require("../modules/User/RatingControl/Rating.control");
const adminrouter = require("../modules/User/Admincontrol/admin_control");
const plecerouter = require("../modules/User/PlaceControl/plece_control");
const userPlacerouter = require("../modules/User/user_place_control/UserPlaceControl");
const transaportationrouter = require("../modules/User/transportation_control/Transportation_Control");

module.exports = {
  userrouter,
  ratingrouter,
  adminrouter,
  plecerouter,
  userPlacerouter,
  transaportationrouter,
};
