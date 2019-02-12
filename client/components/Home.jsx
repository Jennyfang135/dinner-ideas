import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'

const Home =() =>{   
    return(
        <div className ='background'>
            <div class="transbox">
                <p>Dinner usually refers to the most significant meal of the day, 
                    which can be at noon or in the evening.In Chinese culture, 
                    dinner also means family time, we sit around at a round table, 
                    and share the news or interesting topics. For me, dinner is
                    not only filling up your stomch, it also warming up our hearts.
                </p>
                <p>This is my personal dinner recipes App which I will store all my 
                    favourite recipes.</p>
                <p>What would you like for dinner today? </p>
                <p>Click on the food category on your left and find out!</p>
            </div>
        </div>   
    )
}
export default Home