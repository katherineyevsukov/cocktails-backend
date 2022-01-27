const db = require("../../data/db-config");

async function getAll() {
  const cocktails = await db("cocktails as c")
    .select("c.id", "c.name", "c.photo", "u.first_name", "u.last_name")
    .join("users as u", "c.user_id", "u.id")
    .whereNull("c.deleted_at", "u.deleted_at");

  return cocktails;
}

// Select c.id, c.name, c.photo, u.first_name || ' ' || u.last_name as full_name from cocktails as c
// join users as u
// on c.user_id = u.id
// where c.deleted_at is null
// and u.deleted_at is null
module.exports = { getAll };
