//model Admin schema
const { model } = require("mongoose");
//becrypt
const becrypt = require("bcrypt");
const Admingschema = require("../../../../model/collection/Admin_s/adminschema");
//create Admin
const creatAdmin = async (req, res, next) => {
  try {
    const { AdminName, AdminEmile, Password, ratingID } = req.body;

    //Here I will make sure that the Passport is available or not if there will bring me that it is available
    const get_admin_emile = await Admingschema.findOne({ AdminEmile });
    if (get_admin_emile) {
      res.json({ err: "user already exist" });
    } else {
      /*Here I will encrypt the word word and see if it was done has encryption or not if it was done I will take it in the hash if it is done it will get a message for 
    him erroHere I will encrypt the word word and see if it was done has encryption or not if it was done I will take it in the hash if it was done it will get a message for him error*/

      becrypt.hash(Password, 8, async (err, hash) => {
        if (err) {
          res.json({ err: "user already exist", err });
        } else {
          const Admin = await Admingschema.insertMany({
            AdminName,
            AdminEmile,
            Password: hash,
            ratingID,
          });

          res.json({ message: "Done ", Admin });
        }
      });
    }
  } catch (error) {
    res.json({ err: " carch error ", error });
  }
};

module.exports = { creatAdmin };
