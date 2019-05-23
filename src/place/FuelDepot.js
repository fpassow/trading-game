import React from 'react'
import {FLORIN_MARK} from '../constants'
/*
 * This component is where the player buys fuel.
 * It has a botton to buy one unit of fuel, and another to 
 * buy the exact amount required to max out the ship's storage
 * capacity.
 */
 
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
                            {place.fuelPrice}  {FLORIN_MARK}
                        </button> 
                    </div>
                :
                    ''
                }
                {(fuelGap) ? 
                    <div>
                        <button style={buttonStyle} onClick={()=>{buyFuel(place.placeId, fuelGap)}}>
                            {visualFuelGap}
                            {place.fuelPrice * fuelGap}  {FLORIN_MARK}
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
