import React from 'react'

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
                            {place.foodPrice}  &#402; 
                        </button> 
                    </div>
                :
                    ''
                }
                {(foodGap) ? 
                    <div>
                        <button style={buttonStyle} onClick={()=>{buyFood(place.placeId, foodGap)}}>
                            {visualFoodGap}
                            {place.foodPrice * foodGap}  &#402;
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
