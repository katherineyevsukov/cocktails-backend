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

async function add(newUser) {
  const [createdUser] = await db("users").insert(newUser, ["id",
  "email",
  "password",
  "first_name",
  "last_name",
  "phone"])

  return createdUser
}


// add({email: 'fritz@fritz.com', password: 'password', first_name: 'fritz', last_name: 'frankilin', phone: '444-444-4444'}).then(res => {
//   console.log(res)
// })

module.exports = {
  findAll,
  findBy,
  add
};
