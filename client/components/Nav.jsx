import React from 'react'
import {Link} from 'react-router-dom'
import {getCategory} from '../api'
import {capitalize} from '../utilities'

class Nav extends React.Component{
    constructor(){
        super()
        this.state ={
            category:[]
        }
    }
    componentDidMount(){
        getCategory()
         .then(category => this.setState({category}))
         .catch(err=>console.error('error',err))
    }
    render(){
        return(
            <div className='nav'>
                <h2> Food Category</h2>
                <ul>
                 {this.state.category.map(item =>
                 <li><Link to = {`/category/${item.name}`} >{capitalize(item.name)}</Link></li>)}
                </ul> 
            </div>
        )
    }
}
export default Nav