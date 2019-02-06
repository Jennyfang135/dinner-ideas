const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFoodCategory: getFoodCategory,
  getFoodItemList: getFoodItemList,
  getMenu: getMenu,
  addCategory: addCategory,
  getCategoryName: getCategoryName
}

function getFoodCategory (db = connection) {
  return db('foodCategory').select()
}

function getCategoryName(id, db = connection){
  return db('foodCategory')
  .where('id',id)
  .select()
}
function getFoodItemList(id, db=connection){
  return db('foodItemList')
    .join('foodCategory', 'foodCategory.id', '=', 'foodItemList.foodCategory_id')
    .where('foodCategory_id', id) 
    .select('foodCategory.id as categoryId', 'foodItemList.id as itemId',
    'foodCategory.name as categoryName', 'foodName', 'foodItemList.image')
}

function getMenu(id, db=connection){
  return db('foodItemList')
    .where('foodItemList.id', id) 
    .select('foodCategory_id as categoryId', 'foodItemList.id as itemId', 'foodName', 
    'foodItemList.image', 'recipeURL')
   
}

function addCategory(newCategory, newImage, db=connection){
  return db('foodCategory').insert({name: newCategory, image:newImage})
}