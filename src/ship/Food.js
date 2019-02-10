import React from 'react'

const Food = ({myShip}) => {
    return (
        <div>
            <h3>Food</h3>
            {myShip.food} rations (Capacity: {myShip.maxFood} rations)
        </div>
    )
}

export default Food
