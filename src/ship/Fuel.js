import React from 'react'

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
    let fuelStyle = {
        border: '2px solid black',
        padding: '5px',
        margin: '5px'
    }
    return (
        <div style={fuelStyle}>
            {fuelArr}
        </div>
    )
}
export default Fuel
