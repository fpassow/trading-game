import React from 'react'
import imagesByType from '../imagesByType'

const buttonStyle = (cargo) => {
    return {
        height:'50px',
        width: '50px',
        background: 'url(' + imagesByType[cargo.cargoType] + ') no-repeat',
        paddingTop: '30px',
        fontWeight: 'bold',
        color: 'gold',
        textShadow: '1px 1px 2px black'
    }
}

const disabledStyle = {
    width: '50px',
    height: '50px'
}

/**
 * This is a component to display one unit of cargo, on the dock or in the hold.
 * If a price isn't null, the component will be a button which can be clicked to trigger a buy or sell.
 * 
 * aCargo - will to be an object like: {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil',
 *                                   isLoaded: false, placeId: 'portharbor', shipId: null}
 * 
 * price - is the buying or selling price.
 * 
 * enabled - controls whether the component is clickable
 * 
 * cargoClicked - is a function which expects a cargoId. A cargo-buying or cargo-selling function should be passed depending
 *               on where this component is used.
 */
const Cargo = ({aCargo, price, enabled, cargoClicked}) => {
    if (enabled) {
        return (
            <button title={aCargo.cargoLabel} onClick={()=>{cargoClicked(aCargo.cargoId)}} style={buttonStyle(aCargo)}>
                {price}&#402;
            </button>
        )
    } else {
        return <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} style={disabledStyle} />
    }
}

// <img src={} alt={aCargo.cargoLabel} /><br/>


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