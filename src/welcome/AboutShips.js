import React from 'react'
import { shipyard } from '../factories'

const allShipTypes = [
    'fishboat', 
    'longboat', 
    'albionsteamclipper', 
    'enginebarge', 
    'silverzeplin',
    'steamturbinehovercraft'
]

const AboutShips = () => (
    {allShipTypes.map((sType)=>(<ShipTypeData sample={shipyard('bogoPlace', sType, 'bogoName')} />))}
)

const ShipTypeData = (ship) => (
    <div>
        <img src={ship.shipType + '_large.png'} alt="" />
        <h3>{ship.shipTypeName}</h3> 
         <table>
             <tr><td>Price</td><td>ship.basePrice</td></tr></table>ship.basePrice = 5000
         ship.crewSize = 2
         ship.maxFuel = 12
         ship.speed = 3
         ship.fueldPerMove = 3
         ship.maxCargo = 4
         ship.maxFood = 10
    </div>
)


export default AboutShips