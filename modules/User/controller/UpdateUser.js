//model user schema
const userschema = require("../../../model/collection/userschema");
//create updateuser

const updateuser = async (req, res, next) => {
  try {
    const { Full_Name } = req.body;
    const { id } = req.params;

    const user = await userschema.findOne({ _id: id });
    if (user) {
      const updateduser = await userschema.findByIdAndUpdate(
        { _id: id },
        { Full_Name }
      );
      res.json({ message: "Done user", updateduser });
    } else {
      res.json({ error: "in-valid user" });
    }
  } catch (error) {
    res.json({ error: "catch  error", error });
  }
};

module.exports = { updateuser };
