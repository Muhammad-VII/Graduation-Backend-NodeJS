//model user schema
const userschema = require("../../../model/collection/userschema");
//create deletuser

const deletuser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userschema.findOne({ _id: id });
    if (user) {
      const deleteduser = await userschema.findOneAndDelete({ _id: id });
      res.json({ message: "Done deleteduser", deleteduser });
    } else {
      res.json({ error: "in-valid user" });
    }
  } catch (error) {
    res.json({ error: "catch  error", error });
  }
};

module.exports = { deletuser };
