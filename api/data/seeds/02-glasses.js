exports.seed = function (knex, Promise) {
  return knex("glasses").insert([
    { type: "martini" },
    { type: "coupe" },
    { type: "highball" },
    { type: "collins" },
    { type: "nick & nora" },
    { type: "single rocks" },
    { type: "double rocks" },
    { type: "shot glass" },
    { type: "pilsner" },
    { type: "pint" },
    { type: "tiki mug" },
    { type: "copper mug" },
    { type: "julep tin" },
  ]);
};
