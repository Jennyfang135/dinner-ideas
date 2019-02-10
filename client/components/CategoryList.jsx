import React from 'react'
import {Link} from 'react-router-dom'
import {getCategoryList} from '../api'
import {capitalize} from '../utilities'

class CategoryList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            categoryList:[],
            name: props.match.params.name
        }
    }

    componentDidMount(){
        getCategoryList(this.state.name)
        .then(categoryList=>this.setState({categoryList}))
        .catch(err=>console.error('error',err))
    }
    render(){
        return(
            <div className='itemDetails'>
                <h2> Here are some yummy recipes</h2>
                <ul>
                {this.state.categoryList.map(item=>
                   <div>
                    <li><h3><Link to={`/category/${item.name}`}>{capitalize(item.foodName)}</Link></h3></li>
                    <li><img src={`../../images/${item.image}`}></img></li>
                   </div> 
                )}
                </ul>
            </div>
        ) 
    }     
}

export default CategoryList