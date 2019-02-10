const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/category', (req, res) => {
  db.getFoodCategory()
    .then(foodcategory => {
      //console.log('foodCategory',foodCategory)
      res.json(foodcategory)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/category/:name', (req, res) => {
 // console.log("i am on server side category")
  const name = req.params.name
 // console.log('foodname',name)
  db.getCategoryIdByName(name)
  .then(item=>{
 // console.log('id i need', item)
    db.getFoodItemList(item[0].id)
    .then(items => {
     console.log('items',items)
      res.json(items)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  })
})
router.get('/category/:name/:itemName', (req, res)=>{
  console.log("i am on server side details")
  const itemName = req.params.itemName
  console.log('itemName',itemName)
  db.getMenu(itemName)
  .then(menu =>{
    console.log('menu',menu)
    res.json(menu)
  })
  .catch(err =>{
    res.status(500).send(err.message)
  })
 })

// router.get('/add', (req, res) =>{
//   res.render('add.hbs')
// })

// router.post('/add', (req, res) =>{
//   const category = req.body.category
//   const image = req.body.image
//   db.addCategory(category, image)
//   .then(res.redirect('/'))
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

// router.get('/category/:id/add', (req, res) =>{
//   console.log("hello, I am here")
//   const id = Number(req.params.id)
//   console.log('id', id)
//   db.getCategoryName(id)
//   .then (item =>{
//     console.log('item',item)
//     res.render('addNewFoodItem.hbs', {item: item})
//   })
//   .catch(err=>{
//     res.status(500).send(err.message)
//   })
  
// })
 module.exports = router
