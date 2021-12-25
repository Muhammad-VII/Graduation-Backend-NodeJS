//model Rating schema
const { model } = require("mongoose");
const Ratingschema = require("../../../../model/collection/Rating/rating");
//create Rating
const creatrating = async (req, res, next) => {
  try {
    const { Rate_value, Date, userID } = req.body;
    const Ratings = await Ratingschema.insertMany({ Rate_value, Date, userID });
    res.json({ message: " success  ", Ratings });
  } catch (error) {
    res.json({ err: " carch error ", error });
  }
};

module.exports = { creatrating };
