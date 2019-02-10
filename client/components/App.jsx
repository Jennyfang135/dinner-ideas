import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import CategoryList from './CategoryList'
import FoodItemDetails from './FoodItemDetails'

const App=() => {
   
  return ( 
    <Router>
      <div className ='app'>
        <h1>What's for dinner tonight</h1>
        <hr/>
        <div className ='container'>
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path ='/' component ={Home}/> 
            <Route path='/category/:name' component={CategoryList} />
            <Route path='/category/:name/:foodItem' component={FoodItemDetails} />
          </div>
        </div>
      </div>
    </Router>
  )
} 

export default App