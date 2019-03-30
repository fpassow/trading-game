import React from 'react'
import { shipyard } from '../factories'

const allShipTypes = [
    'fishboat', 
    'albionsteamclipper', 
    'enginebarge', 
    'silverzeplin',
    'steamturbinehovercraft'
]

const exampleShips = allShipTypes.map((shipType)=>(shipyard('bogoPlace', shipType, 'bogoName')))

const AboutShips = () => (
    <div>
        {exampleShips.map((ship)=>(<ShipTypeData key={ship.shipType} sample={ship} />))}
    </div>
)

const ShipTypeData = (ship) => (
    <div>
        <img src={ship.shipType + '_large.png'} alt="" />
        <h3>{ship.shipTypeName}</h3> 
         <table>
             <tbody>
                 <tr><td>Price</td><td>{ship.basePrice}</td></tr>
             </tbody>
        </table>
             ship.basePrice = 5000
         ship.crewSize = 2
         ship.maxFuel = 12
         ship.speed = 3
         ship.fueldPerMove = 3
         ship.maxCargo = 4
         ship.maxFood = 10
    </div>
)


export default AboutShips