const router = require("express").Router();
const Cocktails = require("./cocktails-model");

router.get("/", async (req, res, next) => {
    try {
      const cocktailsList = await Cocktails.getAll();
      res.status(200).json(cocktailsList);
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;
