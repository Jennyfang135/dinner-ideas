
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foodItemList', table=>{
      table.increments('id').primary()
      table.integer('foodCategory_id').references('foodCategory.id')
      table.string('foodName')
      table.string('image')
      table.string('recipeURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('foodItemList')
};
