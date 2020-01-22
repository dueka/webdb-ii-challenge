exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", tb1 => {
    tb1.increments();
    tb1
      .decimal("VIN")
      .unique()
      .notNullable();
    tb1.text("make", 128).notNullable();
    tb1.text("model", 128).notNullable();
    tb1.decimal("mileage").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
