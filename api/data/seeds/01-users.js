const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 8);

exports.seed = function (knex, Promise) {
  return knex("users").insert([
    {
      email: "kat@kat.com",
      first_name: "Kat",
      last_name: "Yevsukov",
      password: hash,
      phone: "111-111-1111",
    },
    {
      email: "clem@clem.com",
      first_name: "Clementine",
      last_name: "Kruczynski",
      password: hash,
      phone: "222-222-2222",
    },
  ]);
};
