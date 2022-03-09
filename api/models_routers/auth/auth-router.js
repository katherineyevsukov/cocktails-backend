const router = require('express').Router()
const tokenBuilder = require("./token-builder")
const { checkUserValid, hashPassword, checkEmailUnique, checkPhoneUnique } = require('./../auth/auth-middleware')

router.post("/login", checkUserValid, (req, res) => {
    const user = req.userFromDb;
    res
      .status(200)
      .json({ message: `welcome, ${user.first_name}`, token: tokenBuilder(user), user });
  });

  router.post("/register", hashPassword, checkEmailUnique, checkPhoneUnique, (req, res, next) => {
    console.log(req.body)
  })

  module.exports = router
