const router = require("express").Router();
const Users = require("./users-model");

router.get("/", async (req, res, next) => {
    try {
      const usersList = await Users.findAll();
      res.status(200).json(usersList);
    } catch (err) {
      next(err);
    }
  });

  module.exports = router
