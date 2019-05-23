import React from 'react'
import imagesByType from '../imagesByType'
import {seaBlue} from '../styleConstants'
import {FLORIN_MARK} from '../constants'

/*
 * This component displays all the ships which are for sale at the current seaport.
 * Ships which the player can afford have an active "buy" button.
 */
 
const sfsStyle = {
    background:seaBlue, 
    color: 'white', 
    minHeight: '150px', 
    paddingLeft: '10px',
    marginLeft: '10px'
}
export default function ShipsForSaleComponent({shipsForSale, cash, buyShip}) {
    return (
        <div style={sfsStyle} >
            <h3>Ships for Sale</h3>
            {shipsForSale.map((ship)=><ShipForSale key={ship.shipId} buyShip={buyShip} ship={ship} canBuy={ship.basePrice <= cash}/>)}
        </div>
    )
}

function  ShipForSale({ship, canBuy, buyShip}) {
    return (
        <div >
            <img alt="" src={imagesByType[ship.shipType]} />
            {ship.shipTypeName} &nbsp;
            <em>{ship.shipName}</em> &nbsp;
            {ship.basePrice}{FLORIN_MARK} &nbsp;
            {canBuy ? <button onClick={()=>{buyShip(ship.shipId)}}>buy</button> : ' '}
        </div>
    )
}
