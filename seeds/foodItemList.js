
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodItemList').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodItemList').insert([
        {id: 1, foodCategory_id: 1, foodName: 'roast-Chicken', image: 'roastChicken.jpg', recipeURL:'https://www.tegel.co.nz/recipes/perfect-roast-chicken-dinner/?utm_source=google&utm_medium=cpc'},
        {id: 2, foodCategory_id: 1, foodName:'tariyaki-Chicken', image:'tariyakiChicken.jpg', recipeURL: 'https://rasamalaysia.com/chicken-teriyaki-recipe'},   
        {id:11, foodCategory_id: 2, foodName: 'eye-FilletSteaks', image:'eyeFilletSteaks.jpg', recipeURL:'http://allrecipes.com.au/recipe/1137/eye-fillet-steak.aspx'}
      ]);
    });
};
