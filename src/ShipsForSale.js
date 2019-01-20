import React from 'react'

export default function ShipsForSaleComponent({shipsForSale}) {
    return (
        <div >
            <h3>Ships for Sale</h3>
            {shipsForSale.map((ship)=><ShipForSale key={ship.shipId} ship={ship} />)}
        </div>
    )
}

function  ShipForSale({ship}) {
    return (
        <div >
            {ship.shipTypeName} <em>{ship.shipName}</em> {ship.basePrice}&#402;
        </div>
    )
}

