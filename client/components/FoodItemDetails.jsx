import React from 'react'
import {getItemDetails} from '../api'

class FoodItemDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menuDetails:[],
            name: props.match.params.name,
            itemName:props.match.params.foodItem
        }
    }

    componentDidMount(){
        getItemDetails(this.state.name, this.state.itemName)
        .then(menuDetails=>this.setState({menuDetails}))
        .catch(err=>console.error('error',err))
    }
    render(){
        return(
            <div className='itemDetails'>
                <h2> Would you like to try this menu?</h2>
                <div>   
                    <h3>{this.state.itemName}</h3>
                    <ul>                        
                        {this.state.menuDetails.map(item=>
                            <div>
                                {<li><img src={`../../images/${item.image}`}></img></li> }
                                <li><iframe src={item.recipeURL} height="600" width="800"></iframe></li> 
                            </div>
                        )}
                    </ul>
                </div> 
            </div>
        ) 
    }     
}

export default FoodItemDetails