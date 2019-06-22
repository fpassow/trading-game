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
    marginLeft: '10px',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px'
}
export default function ShipsForSaleComponent({shipsForSale, cash, buyShip, myShipId}) {
    const highlightBuyButton = !myShipId
    return (
        <div style={sfsStyle} >
            <h3>Ships for Sale</h3>
            {shipsForSale.map((ship)=><ShipForSale key={ship.shipId} highlightBuyButton={highlightBuyButton}buyShip={buyShip} ship={ship} canBuy={ship.basePrice <= cash}/>)}
        </div>
    )
}
const highlightedButtonStyle = {
    color: 'red',
    background: 'yellow'
}
const normalButtonStyle = {}
function  ShipForSale({ship, canBuy, buyShip, highlightBuyButton}) {
    const buttonStyle = highlightBuyButton ? highlightedButtonStyle : normalButtonStyle
    return (
        <div >
            <img alt="" src={imagesByType[ship.shipType]} />
            {ship.shipTypeName} &nbsp;
            <em>{ship.shipName}</em> &nbsp;
            {ship.basePrice}{FLORIN_MARK} &nbsp;
            {canBuy ? <button style={buttonStyle} onClick={()=>{buyShip(ship.shipId)}}>buy</button> : ' '}
        </div>
    )
}
