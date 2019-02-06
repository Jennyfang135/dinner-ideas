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
     // console.log('items',items)
      res.render('foodItems', 
      {
        id:id,
        cateName: items[0].categoryName,
        items: items})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/category/:categoryId/:itemListId', (req, res)=>{
  const id = req.params.itemListId
  db.getMenu(id)
  .then(menu =>{
    res.render('individualMenu', {menu:menu})
  })
  .catch(err =>{
    res.status(500).send(err.message)
  })
 })

router.get('/add', (req, res) =>{
  res.render('add.hbs')
})

router.post('/add', (req, res) =>{
  const category = req.body.category
  const image = req.body.image
  db.addCategory(category, image)
  .then(res.redirect('/'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/category/:id/add', (req, res) =>{
  console.log("hello, I am here")
  const id = req.params.id
  console.log('id', id)
  db.getCategoryName(id)
  .then (item =>{
    console.log('item',item)
    res.render('addNewFoodItem.hbs', {item: item})
  })
  .catch(err=>{
    res.status(500).send(err.message)
  })
  
})
 module.exports = router
