const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const { BCRYPT_ROUNDS, TOKEN_SECRET } = require("./../../config/index");
const { userSchema } = require("./auth-schemas");
const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next({ status: 401, message: "Token required" });
  } else {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        delete req.decodedJwt;
        next({
          status: 401,
          message: "Token invalid",
        });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  }
};

const checkUserValid = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Users.findBy({ email });
    if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
      req.userFromDb = existingUser;
      next();
    } else {
      next({ status: 401, message: "Invalid credentials." });
    }
  } catch (err) {
    next(err);
  }
};

const hashPassword = async (req, res, next) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
  user.password = hash;
  next();
};

const checkEmailUnique = async (req, res, next) => {
  try {
    const existingEmail = await Users.findBy({ email: req.body.email });
    !existingEmail
      ? next()
      : next({
          status: 400,
          message: "An account with this email already exists.",
        });
  } catch (err) {
    next(err);
  }
};

const checkPhoneUnique = async (req, res, next) => {
  try {
    const existingPhone = await Users.findBy({ phone: req.body.phone });
    !existingPhone
      ? next()
      : next({
          status: 400,
          message: "An account with this phone already exists.",
        });
  } catch (err) {
    next(err);
  }
};

const validateRegistrationBody = async (req, res, next) => {
  try {
    const validatedSignUp = await userSchema.validate(req.body, {
      strict: false,
      stripUnknown: true,
    });
    req.body = validatedSignUp;
    next();
  } catch (err) {
    next({ status: 400, message: err.message });
  }
};
const createNewUser = async (req, res, next) => {
  try {
    const newUser = await Users.add(req.body);
    req.newUser = newUser;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkUserValid,
  hashPassword,
  checkEmailUnique,
  checkPhoneUnique,
  validateRegistrationBody,
  createNewUser,
  restricted
};
