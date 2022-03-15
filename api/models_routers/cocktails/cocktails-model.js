const db = require("../../data/db-config");

async function getAll() {
  const cocktails = await db("cocktails as c")
    .select(
      "c.id",
      "c.name",
      "c.photo",
      "c.glass_type",
      "c.garnish",
      "u.id as user_id",
      "u.first_name",
      "u.last_name"
    )
    .join("users as u", "c.user_id", "u.id")
    .whereNull("c.deleted_at", "u.deleted_at");

  return cocktails;
}

async function getByCocktailId(id) {
  const cocktail = await db("cocktails as c")
    .select(
      "c.id",
      "c.name",
      "c.photo",
      "c.glass_type",
      "c.garnish",
      "u.id as user_id",
      "u.first_name",
      "u.last_name"
    )
    .join("users as u", "c.user_id", "u.id")
    .whereNull("c.deleted_at", "u.deleted_at")
    .andWhere("c.id", id)
    .first();

  return cocktail;
}

// getById(3).then(res => {
//     console.log(res)
// })
// Select c.id, c.name, c.photo, u.first_name || ' ' || u.last_name as full_name from cocktails as c
// join users as u
// on c.user_id = u.id
// where c.deleted_at is null
// and u.deleted_at is null

async function getCocktailIngredients(id) {
  const ingredients = await db("ingredients as i")
    .select("i.id", "i.name", "i.alcoholic", "i.category", "ci.quantity")
    .join("cocktails_ingredients as ci", "i.id", "ci.ingredient_id")
    .whereNull("ci.deleted_at", "i.deleted_at")
    .andWhere("ci.cocktail_id", id);
  return ingredients;
}

// select i.id, i.name, i.alcoholic, i.category, ci.quantity
// from ingredients as i
// join cocktails_ingredients as ci
// on i.id = ci.ingredient_id
// where ci.cocktail_id = 1
// and ci.deleted_at is null
// and i.deleted_at is null

async function getCocktailSteps(id) {
  const steps = await db("cocktails_steps as cs")
    .select("cs.id", "cs.step_number", "cs.step_instructions")
    .whereNull("cs.deleted_at")
    .andWhere("cs.cocktail_id", id);
  return steps;
}

// SELECT cs.id, cs.step_number, cs.step_instructions from cocktails_steps as cs
// where cs.cocktail_id = 1
// and cs.deleted_at is null
// order by cs.step_number asc


module.exports = { getAll, getByCocktailId, getCocktailIngredients, getCocktailSteps };
