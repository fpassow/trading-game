import React from 'react'

const FuelDepot = ({place, buyFuel, hasShip, myShip}) => {
    let fuelGap = 0
    let visualFuelGap = []
    if (hasShip) {
        fuelGap = myShip.maxFuel - myShip.fuel
    }
    for (let i = 0; i < fuelGap; i++) {
        visualFuelGap.push(<img key={i} alt="fuel" src="img/fuel.png"/>)
    }
    const buttonStyle = {
        background: 'inherit'
    }
    if (place.isFuelForSale) {
        return (
            <div>
                <h3>Buy fuel</h3> 
                {(hasShip) ? 
                    <div>
                        <button style={buttonStyle} onClick={()=>{buyFuel(place.placeId, 1)}}>
                            <img alt="rations" src="img/fuel.png"/>
                            {place.fuelPrice}  &#402; 
                        </button> 
                    </div>
                :
                    ''
                }
                {(fuelGap) ? 
                    <div>
                        <button style={buttonStyle} onClick={()=>{buyFuel(place.placeId, fuelGap)}}>
                            {visualFuelGap}
                            {place.fuelPrice * fuelGap}  &#402;
                        </button>
                        </div> 
                : 
                    ''
                }

            </div>
        ) 
    } else {
        return <div> </div>
    }
}

export default FuelDepot
