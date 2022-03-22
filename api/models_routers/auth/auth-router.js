const router = require("express").Router();
const tokenBuilder = require("./token-builder");
const {
  checkUserValid,
  hashPassword,
  checkEmailUnique,
  checkPhoneUnique,
  validateRegistrationBody,
  createNewUser,
  restricted
} = require("./../auth/auth-middleware");

router.get("/verify", restricted, (req, res, next) => {
  res.status(200).json(req.decodedJwt)
})

router.post("/login", checkUserValid, (req, res) => {
  const user = req.userFromDb;
  res.status(200).json({
    message: `welcome, ${user.first_name}`,
    user: {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    },
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
