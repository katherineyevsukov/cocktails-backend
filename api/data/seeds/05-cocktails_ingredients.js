exports.seed = function(knex, Promise) {
  return knex('cocktails_ingredients').insert([   
    {cocktail_id: 1, ingredient_id: 1, quantity: '2 oz'},
    {cocktail_id: 1, ingredient_id: 2, quantity: '0.75 oz'},
    {cocktail_id: 1, ingredient_id: 3, quantity: '0.75 oz'},
    {cocktail_id: 2, ingredient_id: 4, quantity: '1 oz' },
    {cocktail_id: 2, ingredient_id: 5, quantity: '2 oz'},
    {cocktail_id: 2, ingredient_id: 6, quantity: '2 dashes'},
    {cocktail_id: 3, ingredient_id: 2, quantity: '0.5 oz'},
    {cocktail_id: 3, ingredient_id: 7, quantity: '0.75 oz'},
    {cocktail_id: 3, ingredient_id: 8, quantity: '1.5 oz'},
    {cocktail_id: 3, ingredient_id: 9, quantity: '0.5 oz'},
    {cocktail_id: 3, ingredient_id: 10, quantity: '0.5 oz'}
  ]);
};
