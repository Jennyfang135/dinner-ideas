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
        <p class='topRight'>"What's for dinner tonight"</p>
        <hr/>
        <div className ='container'>
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path ='/' component ={Home}/> 
            <Route exact path='/category/:name' component={CategoryList} />
            <Route path='/category/:name/:foodItem' component={FoodItemDetails} />
          </div>
        </div>
      </div>
    </Router>
  )
} 

export default App