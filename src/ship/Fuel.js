import React from 'react'

const Fuel = ({myShip}) => {
    return (
        <div>
            <h3>Fuel</h3>
            {myShip.fuel} tonnes (Capacity: {myShip.maxFuel} tonnes)
        </div>
    )
}

export default Fuel
