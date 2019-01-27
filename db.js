const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFoodCategory: getFoodCategory,
 
}

function getFoodCategory (db = connection) {
  return db('foodCategory').select()
}

function getFoodItemList(id, db=connection){
  return db('foodItemList')
    .where('foodItemList.id', id)
    .select();
}