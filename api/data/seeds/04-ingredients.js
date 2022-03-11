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
