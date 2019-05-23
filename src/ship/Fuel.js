import React from 'react'

/*
 * This component displays a ship's fuel stores using an image
 * for a unit of fuel and a different image for an available space 
 * which is currently empty.
 */
const Fuel = ({myShip}) =>  {
    if (!myShip.fuelPerMove) {
        return <div> </div>
    }
    let fuelArr = []
    for (let i = 0; i < myShip.fuel; i++) {
        fuelArr.push(<img src="img/fuel.png" alt="Fuel barrel" key={i} />)
    }
    for (let i = 0; i < (myShip.maxFuel - myShip.fuel); i++) {
        fuelArr.push(<img src="img/no_fuel.png" alt="Empty fuel bay" key={'e'+i} />)
    }
    const fuelStyle = {
        border: '3px solid brown',
        borderRadius: '5px',
        padding: '3px',
        position: 'relative',
        minHeight: '50px',
        marginTop: '5px'
    }
    return (
        <div style={fuelStyle}>
            {fuelArr}
        </div>
    )
}
export default Fuel
