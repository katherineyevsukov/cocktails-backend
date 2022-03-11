const router = require("express").Router();
const tokenBuilder = require("./token-builder");
const {
  checkUserValid,
  hashPassword,
  checkEmailUnique,
  checkPhoneUnique,
  validateRegistrationBody,
  createNewUser,
} = require("./../auth/auth-middleware");

router.post("/login", checkUserValid, (req, res) => {
  const user = req.userFromDb;
  res.status(200).json({
    message: `welcome, ${user.first_name}`,
    token: tokenBuilder(user),
  });
});

router.post(
  "/register",
  validateRegistrationBody,
  hashPassword,
  checkEmailUnique,
  checkPhoneUnique,
  createNewUser,
  (req, res, next) => {
    res
      .status(201)
      .json({
        message: "Account has been successfully created!",
        user: req.newUser,
      });
  }
);

module.exports = router;
