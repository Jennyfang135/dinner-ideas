const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req,res)=>{
  res.render('index')
})

router.get('/category', (req, res) => {
  db.getFoodCategory()
    .then(foodCategory => {
      res.render('category', {foodCategory: foodCategory})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/category/:id', (req, res) => {
  const id = req.params.id
  db.getFoodItemList(id)
    .then(items => {
      console.log(items[0])
      res.render('foodItems', {items: items})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/category/:foodCategory.id/:foodItemList.id', (req, res)=>{
  db.getFoodItemList(foodCategory.id, foodItemList.id)
 })
 module.exports = router
