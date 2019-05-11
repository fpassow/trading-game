import React from 'react'

const Chandler = ({place, buyFood, hasShip}) => {
    //if (place.foods) {
    return (
        <div>
            <h3>Buy food</h3> 
            <img alt="" className={place.foods ? "fade-in fade-in-isin" : "fade-in"} src="img/rations.png"/>
            {place.foodPrice}  &#402; &nbsp; &nbsp; 
            {(hasShip && place.foods) ? <button onClick={()=>{buyFood(place.placeId)}}>Buy</button> : ''}
        </div>
    )
}

export default Chandler
