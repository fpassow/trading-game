import React from 'react'

const Chandler = ({place, buyFood, hasShip}) => {
    return (
        <div>
            <h3>Chandler</h3>
            Rations: {place.foodPrice}  &#402; {hasShip ? <button onClick={buyFood}>Buy</button> : ''}
        </div>
    )
}

export default Chandler
