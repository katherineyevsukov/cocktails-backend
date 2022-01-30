const Users = require('../users/users-model');
const bcrypt = require("bcryptjs");

const checkUserValid = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const existingUser = await Users.findBy({ email });
      if (
        existingUser &&
        bcrypt.compareSync(password, existingUser.password)
      ) {
        req.userFromDb = existingUser;
        next();
      } else {
        next({ status: 401, message: "invalid credentials" });
      }
    } catch (err) {
      next(err);
    }
  };

  module.exports = { checkUserValid }
