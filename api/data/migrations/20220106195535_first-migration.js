exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("id");
      users.string("email", 254).notNullable().unique();
      users.string("password", 50).notNullable();
      users.string("first_name", 120).notNullable();
      users.string("last_name", 120).notNullable();
      users.string("phone", 25).notNullable();
      users.timestamp("deleted_at");
      users.timestamps(false, true);
    })
    .createTable("cocktails", (cocktails) => {
      cocktails.increments("id");
      cocktails.string("name", 300).notNullable();
      cocktails
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      cocktails
        .enum("glass_type", [
          "coupe",
          "martini",
          "collins",
          "highball",
          "nick & nora",
        ])
        .notNullable();
      cocktails.string("photo");
      cocktails.string("garnish");
      cocktails.timestamp("deleted_at");
      cocktails.timestamps(false, true);
    })
    .createTable("ingredients", (ingredients) => {
        ingredients.increments("id");
        ingredients.string("name", 300).notNullable();
        ingredients.boolean("alcoholic").notNullable();
        ingredients.timestamp("deleted_at");
        ingredients.timestamps(false, true);
      });
};

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists("cocktails")
  .dropTableIfExists("users");
  
};
