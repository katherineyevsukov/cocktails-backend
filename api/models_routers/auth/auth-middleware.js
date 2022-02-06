const Users = require('../users/users-model');
const bcrypt = require("bcryptjs");
const { BCRYPT_ROUNDS } = require("./../../config/index")
const { userSchema } = require("./auth-schemas")
const yup = require("yup")

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

  const hashPassword = async (req, res, next) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
    user.password = hash
    next()
  }

  // const checkEmailUnique = async (req, res, next) => {
  //   try {
  //     const existingEmail
  //   } catch (err){
  //     next(err)
  //   }
  // }

  // const checkPhoneUnique = async (req, res, next) => {

  // }



  module.exports = { checkUserValid, hashPassword}
