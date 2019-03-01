import React from 'react'

const Chandler = ({place, buyFood, hasShip}) => {
    return (
        <div>
            Rations <img alt="" src="rations.jpg"/> {place.foodPrice}  &#402; {hasShip ? <button onClick={buyFood}>Buy</button> : ''}
        </div>
    )
}

export default Chandler
