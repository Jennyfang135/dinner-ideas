
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodItemList').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodItemList').insert([
        {id: 1, foodCategory_id: 1, foodName: 'roast-Chicken', image: 'roastChicken.jpg', recipeURL:'https://www.tegel.co.nz/recipes/perfect-roast-chicken-dinner/?utm_source=google&utm_medium=cpc'},
        {id: 2, foodCategory_id: 1, foodName:'tariyaki-Chicken', image:'tariyakiChicken.jpg', recipeURL: 'https://rasamalaysia.com/chicken-teriyaki-recipe'},   
        {id:11, foodCategory_id: 2, foodName: 'eye-FilletSteaks', image:'eyeFilletSteaks.jpg', recipeURL:'https://tenplay.com.au/channel-ten/masterchef/recipes/eye-fillet-with-seasonal-vegetables'},
        {id:12, foodCategory_id: 2, foodName:'black-pepper-sauce-beef', image:'blackPepperSauceBeef.jpg', recipeURL:'http://www.beyondkimchee.com/beef-and-peppers-stir-fry/'},
        {id:21, foodCategory_id:3, foodName: 'lamb-rack', image:'lambRack.jpg', recipeURL:'https://www.annabel-langbein.com/recipes/lamb-racks-and-salsa-verde/986/'},
        {id:31, foodCategory_id: 4, foodName: 'sweet-sour-pork', image:'sweetSourPork.jpg', recipeURL:'https://rasamalaysia.com/sweet-and-sour-pork/'},
        {id:41, foodCategory_id:5, foodName: 'fish-chips', image:'fishChips.jpg', recipeURL:'http://www.delonghi.com/en-nz/products/kitchen/recipes/multifry/extra-chef-fh1394/fish-and-chips'},
        {id:51, foodCategory_id: 6, foodName: 'roastPotatoes', image:'roastPotatoes.jpg', recipeURL:'https://www.foodinaminute.co.nz/Recipes/Perfect-Roast-Potatoes'}

      ]);
    });
};
