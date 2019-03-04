import React from 'react'

const Chandler = ({place, buyFood, hasShip}) => {
    //if (place.foods) {
    return (
        <div>
            Rations <img alt="" className={place.foods ? "fade-in fade-in-isin" : "fade-in"} src="rations.jpg"/>
            {place.foodPrice}  &#402; 
            {(hasShip && place.foods) ? <button onClick={()=>{buyFood(place.placeId)}}>Buy</button> : ''}
        </div>
    )
}

export default Chandler
