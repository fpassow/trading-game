import React from 'react'

const Chandler = ({place, buyFood, hasShip}) => {
    if (place.isFoodForSale) {
        return (
            <div>
                <h3>Buy food</h3> 
                <img alt="" src="img/rations.png"/>
                {place.foodPrice}  &#402; &nbsp; &nbsp; 
                {(hasShip) ? <button onClick={()=>{buyFood(place.placeId)}}>Buy</button> : ''}
            </div>
        ) 
    } else {
        return <div> </div>
    }
}

export default Chandler
