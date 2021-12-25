//model user schema
const userschema = require("../../../model/collection/userschema");
//get user
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const User = await userschema.find({ Bus_ID: id }).populate("Bus_ID");
    res.json({ message: " succese User ", User });
  } catch (error) {
    res.json({ err: " carch error ", error });
  }
};

module.exports = { getUser };
