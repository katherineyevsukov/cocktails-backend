const db = require("../../data/db-config");

async function findAll() {
    const users = await db('users as u')
      .select('u.id', 'u.email', 'u.first_name', 'u.last_name', 'u.phone')
      .whereNull('deleted_at')
      .orderBy('u.id');
  
    return users;
  }

module.exports = {
    findAll
}
