const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFoodCategory: getFoodCategory,
  getFoodItemList: getFoodItemList
}

function getFoodCategory (db = connection) {
  return db('foodCategory').select()
}

function getFoodItemList(id, db=connection){
  return db('foodItemList')
    .join('foodCategory', 'foodCategory.id', '=', 'foodItemList.foodCategory_id')
    .where('foodCategory_id', id) 
    .select('foodCategory.id as categoryId', 'foodItemList.id as itemId',
    'foodCategory.name as categoryName', 'foodName', 'foodItemList.image')
}