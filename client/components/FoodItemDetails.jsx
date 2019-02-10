import React from 'react'
import {Link} from 'react-router-dom'
import {getItemDetails} from '../api'

class FoodItemDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:  props.match.params.name,
            foodItem: props.match.params.foodItem,
            menuDetails:{}    
        }
    }

    componentDidMount(){
        getItemDetails(this.name, this.foodItem)
        .then(menuDetails=>this.setState({menuDetails}))
        .catch(err=>console.error('error',err))
    }
    render(){
        return(
            <div className='itemDetails'>
                <h2> Would you like to try this menu?</h2>

                {console.log('name in categoryList', this.props.name)}
                {this.state.foodItem.map(item=>
                   <div>
                    <li><h3>{item.foodName}</h3></li>
                    <li><img src={`../../images/${item.image}`}></img></li>
                    <li><iframe src={{recipeURL}} height="600" width="1000"></iframe></li>
                   </div> 
                )}
            </div>
        ) 
    }     
}

export default FoodItemDetails