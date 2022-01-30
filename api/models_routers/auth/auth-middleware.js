const Users = require('../users/users-model');
const bcrypt = require("bcryptjs");

const checkUserValid = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const existingUser = await Users.findBy({ username });
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
