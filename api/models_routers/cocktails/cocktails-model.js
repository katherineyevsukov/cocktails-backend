const db = require("../../data/db-config");

async function getAll() {
  const cocktails = await db("cocktails as c")
    .select("c.id", "c.name", "c.photo", "c.glass_type", "c.garnish", "u.first_name", "u.last_name")
    .join("users as u", "c.user_id", "u.id")
    .whereNull("c.deleted_at", "u.deleted_at");

  return cocktails;
}

async function getByCocktailId(id) {
    const cocktail = await db("cocktails as c")
    .select("c.id", "c.name", "c.photo", "c.glass_type", "c.garnish", "u.first_name", "u.last_name")
    .join("users as u", "c.user_id", "u.id")
    .whereNull("c.deleted_at", "u.deleted_at")
    .andWhere('c.id', id)

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
module.exports = { getAll, getByCocktailId };
