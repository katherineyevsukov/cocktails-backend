exports.seed = function(knex, Promise) {
  return knex('cocktails').insert([   
    { name: 'Rosemary Gimlet', user_id: 1, glass_type: 'coupe', photo: 'https://abeautifulmess.com/wp-content/uploads/2019/07/easy-gimlet-cocktail-recipe.jpg', garnish: 'rosemary sprig'},
    { name: 'Manhattan', user_id: 1, glass_type: 'coupe', photo: 'https://images.unsplash.com/photo-1582056509381-33e11b85733f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80', garnish: 'luxardo cherry skewer'},
    { name: 'Clem\'s Maragarita', user_id: 2, glass_type: 'double rocks', photo: 'https://images.unsplash.com/photo-1601887573188-79fb3c767157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80', garnish: 'dehydrated lime'},
  ]);
};
