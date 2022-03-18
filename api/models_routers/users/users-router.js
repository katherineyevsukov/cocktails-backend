const router = require("express").Router();
const Users = require("./users-model");
const Cocktails = require("./../cocktails/cocktails-model")
const { restricted } = require("./../auth/auth-middleware")

router.get("/", async (req, res, next) => {
  try {
    const usersList = await Users.findAll();
    res.status(200).json(usersList);
  } catch (err) {
    next(err);
  }
});

// router.get("/current", async (req, res, next) => {
//   try {
//     const usersList = await Users.findAll();
//     res.status(200).json(usersList);
//   } catch (err) {
//     next(err);
//   }
// });

router.get("/current-user/cocktails", restricted, async (req, res, next)  => {
  const cocktails = await Cocktails.getUserCocktailsById(req.decodedJwt.subject)
  res.status(200).json(cocktails)
})

router.get("/:id/cocktails", async(req, res, next) => {
  const cocktails = await Cocktails.getUserCocktailsById(req.params.id)
  res.status(200).json(cocktails)
})

module.exports = router;
