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

router.get("/:id", async (req, res, next) => {
  try {
    const cocktail = await Cocktails.getByCocktailId(req.params.id);
    res.status(200).json(cocktail);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/ingredients", async (req, res, next) => {
  try {
  
  }
})

module.exports = router;
