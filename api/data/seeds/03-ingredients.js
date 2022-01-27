exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { name: 'The Botanist Gin', alcoholic: true, category: "gin"},
      { name: 'fresh lime juice', alcoholic: false, category: "other"},
      { name: 'rosemary simple syrup', alcoholic: false, category: "other"},
      { name: 'Carpano Antica Sweet Vermouth', alcoholic: true, category: "cordial"},
      { name: 'Michter\'s US1 Rye Whiskey', alcoholic: true, category: "bourbon/whiskey"},
      { name: 'Angostura Aromatic Bitters', alcoholic: true, category: "bitters"},
      { name: 'Cointreau Orange Liquer', alcoholic: true, category: "cordial" },
      { name: 'Casamigos Reposado Tequila', alcoholic: true, category: "tequila"},
      { name: 'fresh lemon juice', alcoholic: false, category: "other"},
      { name: 'agave', alcoholic: false, category: "other" }
    ]);
  };
  

//   exports.seed = function(knex, Promise) {
//     return knex('cocktails').insert([   
//       { name: 'Rosemary Gimlet', user_id: 1, glass_type: 'coupe', photo: 'https://abeautifulmess.com/wp-content/uploads/2019/07/easy-gimlet-cocktail-recipe.jpg', garnish: 'rosemary sprig'},
//       { name: 'Manhattan', user_id: 1, glass_type: 'coupe', photo: 'https://images.unsplash.com/photo-1582056509381-33e11b85733f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80', garnish: 'luxardo cherry skewer'},
//       { name: 'Clem\'s Maragarita', user_id: 2, glass_type: 'double rocks', photo: 'https://images.unsplash.com/photo-1601887573188-79fb3c767157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80', garnish: 'dehydrated lime'},
//     ]);
//   };
