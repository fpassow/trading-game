import React from 'react'

export default function ShipsForSaleComponent({shipsForSale, cash, buyShip}) {
    return (
        <div >
            <h3>Ships for Sale</h3>
            {shipsForSale.map((ship)=><ShipForSale key={ship.shipId} buyShip={buyShip} ship={ship} canBuy={ship.basePrice <= cash}/>)}
        </div>
    )
}

function  ShipForSale({ship, canBuy, buyShip}) {
    return (
        <div >
            {ship.shipTypeName} &nbsp;
            <em>{ship.shipName}</em> &nbsp;
            {ship.basePrice}&#402; &nbsp;
            {canBuy ? <button onClick={()=>{buyShip(ship.shipId)}}>buy</button> : ' '}
        </div>
    )
}

