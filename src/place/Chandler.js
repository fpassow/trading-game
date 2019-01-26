import React from 'react'

const Chandler = ({place, buyFood}) => {
    return (
        <div>
            <h3>Chandler</h3>
            Rations: {place.foodPrice}  &#402; <button onClick={buyFood}>Buy</button>
        </div>
    )
}

export default Chandler
