import React from 'react'
import { shipyard } from '../factories'
import { FLORIN_MARK } from '../constants'

/*
 * This component displays an image and data sheet for every kind
 * of ship in the game.
 */

const allShipTypes = [
    'fishboat', 
    'albionsteamclipper', 
    'enginebarge', 
    'silverzeppelin',
    'steamturbinehovercraft'
]

const exampleShips = allShipTypes.map((shipType)=>(shipyard('bogoPlace', shipType, 'bogoName')))

const aboutShipsStyle = {
    marginTop: '50px'
}
const AboutShips = () => (
    <div style={aboutShipsStyle}>
        <h2>Ships</h2>
        <p>In case you're curious, here are all the ships and other vehicles
            available in the game. Consult this if you want to calculate exactly
            how much fuel or food are required for a given trip, or to understand how
            much money you have to accumulate to trade up to a better vehicle.
        </p>
        <p>However, as long as you keep your food and fuel supplies topped up, you can 
            also play by just watching the UI and seeing what happens.
        </p>
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
        <img src={'img/' + ship.shipType + '_large.png'} alt="" style={{maxWidth: '90%'}} />
        <div>
            <h3>{ship.shipTypeName}</h3> 
             <table border="1" style={tableStyle}>
                 <tbody>
                     <tr><td>Base Price</td><td>{ship.basePrice}{FLORIN_MARK}</td></tr>
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