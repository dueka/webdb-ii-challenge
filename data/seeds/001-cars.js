exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: 1, make: "Mitsubishi", model: "parsons", mileage: 200 }
      ]);
    });
};
