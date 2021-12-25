const Mongoose = require("mongoose");

const conection = async () => {
  return await Mongoose.connect("mongodb://localhost:27017/IAwaydb")
    .then((result) => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("file to conact databas error ", error);
    });
};

module.exports = conection;
