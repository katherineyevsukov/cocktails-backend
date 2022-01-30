const db = require("../../data/db-config");

async function findAll() {
  const users = await db("users as u")
    .select("u.id", "u.email", "u.first_name", "u.last_name", "u.phone")
    .whereNull("deleted_at")
    .orderBy("u.id");

  return users;
}

async function findBy(filter) {
  const user = await db("users as u")
    .select(
      "u.id",
      "u.email",
      "u.password",
      "u.first_name",
      "u.last_name",
      "u.phone"
    )
    .whereNull("deleted_at")
    .andWhere(filter)
    .first();

  return user;
}

findBy({ email: "kat@kat.com" }).then((res) => {
  console.log(res);
});

module.exports = {
  findAll,
};
