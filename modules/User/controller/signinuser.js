//model user schema
const userschema = require("../../../model/collection/userschema");
//becrypt
const becrypt = require("bcrypt");

const signIn = async (req, res, next) => {
  try {
    const { emile, password } = req.body;

    const user = await userschema.findOne({ emile });
    if (user) {
      const match = await becrypt.compare(password, user.password);
      if (match) {
        res.json({ message: `welcome ${user.Full_Name}` });
      } else {
        res.json({ err: " in-valid password " });
      }
    } else {
      res.json({ err: " in-valid emile plass siginup frist " });
    }
  } catch (error) {
    res.json({ err: " catch error  ", error });
  }
};
module.exports = { signIn };
