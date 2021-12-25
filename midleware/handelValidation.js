const { validationResult } = require("express-validator");
const isvalid = (req, res) => {
  return (req, res, next) => {
    //Here I get the data from the requist
    const validError = validationResult(req);
    //here i will test and i see my conditions applied to it or not if applied it will get me right or not it will be false
    if (validError.isEmpty()) {
      next();
    } else {
      res.json({ error: "in-valid value", validError: validError.array() });
    }
  };
};

module.exports = { isvalid };
