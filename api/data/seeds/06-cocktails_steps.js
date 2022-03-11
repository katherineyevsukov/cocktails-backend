exports.seed = function (knex, Promise) {
  return knex("cocktails_steps").insert([
    {
      step_number: 1,
      step_instructions:
        "Combine all ingredients in a shaker tin and pack with ice. Shake until tin frosts over.",
      cocktail_id: 1,
    },
    {
      step_number: 2,
      step_instructions:
        "Double strain into coupe glass, express rosemary and clip to edge of glass.",
      cocktail_id: 1,
    },
    {
      step_number: 1,
      step_instructions:
        "Combine all ingredients into mixing glass and fill with ice.",
      cocktail_id: 2,
    },
    {
      step_number: 2,
      step_instructions: "Stir 20 times and strain into chilled coupe class",
      cocktail_id: 2,
    },
    {
      step_number: 3,
      step_instructions: "Place cherry skewer on rim of glass & serve",
      cocktail_id: 2,
    },
    {
      step_number: 1,
      step_instructions:
        "Combine all ingredients in shaker tin and add 1 scoop of ice",
      cocktail_id: 3,
    },
    {
      step_number: 2,
      step_instructions:
        "shake vigorously until well chilled and dump entire mixture (ice included) into rocks glass",
      cocktail_id: 3,
    },
    {
      step_number: 3,
      step_instructions: "Top with more ice, add dehydrated limes, and serve",
      cocktail_id: 3,
    },
  ]);
};
