const router = require('express').Router()
const bcrypt = require('bcryptjs')
const tokenBuilder = require("./token-builder")
const { BCRYPT_ROUNDS } = require("./../../config/index")
const { checkUserValid } = require('./../auth/auth-middleware')

router.post("/login", checkUserValid, (req, res) => {
    const user = req.userFromDb;
    res
      .status(200)
      .json({ message: `welcome, ${user.first_name}`, email: user.email, token: tokenBuilder(user) });
  });

  module.exports = router
