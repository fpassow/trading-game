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

const aboutShipsStyle = {
    marginTop: '50px'
}
const AboutShips = () => (
    <div style={aboutShipsStyle}>
        <h2>Ships</h2>
        {exampleShips.map((ship)=>(<ShipTypeData key={ship.shipType} ship={ship} />))}
    </div>
)

const shipTypeDataStyle = {
    textAlign: 'center',
    border: '1px solid gray',
    borderRadius: '20px',
    margin: '20px auto',
    padding: '10px',
    maxWidth: '400px'
}
const tableStyle = {
    margin: '20px auto',
}
const ShipTypeData = ({ship}) => (
    <div style={shipTypeDataStyle}>
        <img src={ship.shipType + '_large.png'} alt="" />
        <div>
            <h3>{ship.shipTypeName}</h3> 
             <table border="1" style={tableStyle}>
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
    </div>
)


export default AboutShips