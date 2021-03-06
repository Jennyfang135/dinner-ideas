const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/category', (req, res) => {
  db.getFoodCategory()
    .then(foodcategory => {
      res.json(foodcategory)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/category/:name', (req, res) => {
  const name = req.params.name
  db.getCategoryIdByName(name)
  .then(item=>{
    db.getFoodItemList(item[0].id)
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  })
})
router.get('/category/:name/:itemName', (req, res)=>{
  const itemName = req.params.itemName
  db.getMenu(itemName)
  .then(menu =>{
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
