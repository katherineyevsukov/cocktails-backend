exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (users) => {
        users.increments('id')
        users.string('email', 254).notNullable().unique()
        users.string('password', 50).notNullable()
        users.string('first_name', 120).notNullable()
        users.string('last_name', 120).notNullable()
        users.string('phone', 25).notNullable()
        users.timestamp('deleted_at')
        users.timestamps(false, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users')
  }
