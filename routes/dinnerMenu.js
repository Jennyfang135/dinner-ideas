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
    .then(foodItems => {
      res.render('foodItems', foodItems)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
