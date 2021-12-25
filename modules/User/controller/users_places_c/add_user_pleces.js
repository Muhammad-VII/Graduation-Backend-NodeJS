const { model } = require("mongoose");
//model user_place schema
const UsersPlacesSchema = require("../../../../model/collection/users_places_schema/UsersPlacesSchema");
//create user_place
const creatuserplace = async (req, res, next) => {
  try {
    const { userID_fk, placeID_fk } = req.body;
    const User_Place = await UsersPlacesSchema.insertMany({
      userID_fk,
      placeID_fk,
    });
    res.json({ message: " success  ", User_Place });
  } catch (error) {
    res.json({ err: " carch error ", error });
  }
};

module.exports = { creatuserplace };
