import React from 'react'
import {FLORIN_MARK} from '../constants'
/*
 * This componet is where the player buys rations for the crew.
 * For convenience, it displays a button for buying a single day's rations,
 * and another large button which will buy exactly enough rations to fill
 * the player's ship's capacity to hold them.
 */

const Chandler = ({place, buyFood, hasShip, myShip}) => {
    let foodGap = 0
    let visualFoodGap = []
    if (hasShip) {
        foodGap = myShip.maxFood - myShip.food
    }
    for (let i = 0; i < foodGap; i++) {
        visualFoodGap.push(<img key={i} alt="rations" src="img/rations.png"/>)
    }
    const buttonStyle = {
        background: 'inherit'
    }
    if (place.isFoodForSale) {
        return (
            <div>
                <h3>Buy food</h3> 
                {(hasShip) ? 
                    <div>
                        <button style={buttonStyle} onClick={()=>{buyFood(place.placeId, 1)}}>
                            <img alt="rations" src="img/rations.png"/>
                            {place.foodPrice} {FLORIN_MARK}
                        </button> 
                    </div>
                :
                    ''
                }
                {(foodGap) ? 
                    <div>
                        <button style={buttonStyle} onClick={()=>{buyFood(place.placeId, foodGap)}}>
                            {visualFoodGap}
                            {place.foodPrice * foodGap}  {FLORIN_MARK}
                        </button>
                        </div> 
                : 
                    ''
                }

            </div>
        ) 
    } else {
        return <div> </div>
    }
}

export default Chandler
