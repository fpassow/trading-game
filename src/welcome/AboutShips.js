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
console.log(exampleShips)

const AboutShips = () => (
    <div>
        {exampleShips.map((ship)=>(<ShipTypeData key={ship.shipType} ship={ship} />))}
    </div>
)

const ShipTypeData = ({ship}) => (
    <div>
        <img src={ship.shipType + '_large.png'} alt="" />
        <h3>{ship.shipTypeName}</h3> 
         <table border="1">
             <tbody>
                 <tr><td>Base Price</td><td>{ship.basePrice}&#402;</td></tr>
                 <tr><td>Crew Size</td><td>{ship.crewSize}</td></tr>
                 <tr><td>Fuel Capacity</td><td>{ship.maxFuel}</td></tr>
                 <tr><td>Max Speed</td><td>{ship.speed}</td></tr>
                 <tr><td>Fuel per Square Moved</td><td>{ship.fuelPerMove}</td></tr>
                 <tr><td>Cargo Capacity</td><td>{ship.maxCargo}</td></tr>
                 <tr><td>Food Store</td><td>{ship.maxFood}</td></tr>
             </tbody>
        </table>
    </div>
)


export default AboutShips