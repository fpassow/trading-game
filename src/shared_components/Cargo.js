import React from 'react'
import imagesByType from '../imagesByType'

const cargoStyle = {
    display: "inline-block",
    height: '50px',
    width: '50px'
}

/**
 * This is a component to display one unit of cargo, on the dock or in the hold.
 * If a price isn't null, the component will be a button which can be clicked to trigger a buy or sell.
 * 
 * aCargo will to be an object like: {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil',
 *                                   isLoaded: false, placeId: 'portharbor', shipId: null}
 * 
 * price is the buying or selling price.
 * 
 * enabled controls whether the component is clickable
 * 
 * cargoClicked is a function which expects a cargoId. A cargo-buying or cargo-selling function should be passed depending
 *               on where this component is used.
 */
const Cargo = ({aCargo, price, enabled, cargoClicked}) => {
    return (
        <div style={cargoStyle}>
            {enabled ? 
                <div>
                    <button onClick={()=>{cargoClicked(aCargo.cargoId)}}>
                        <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} /><br/>
                        {price}&#402;
                    </button>
                </div> :
                <div>
                    <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} /><br/>
                </div>
            } 
        </div>
    )
}
/*
const Cargo = ({aCargo, prices, sellCargo}) => {
    return (
        <div>
            <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} />
            {prices[aCargo.cargoType] ? 
                <span>
                <button onClick={()=>{sellCargo(aCargo.cargoId)}}>Sell for {prices[aCargo.cargoType]}&#402;</button>
                </span> :
                 ''
            } 
        </div>
    )
}
*/

export default Cargo