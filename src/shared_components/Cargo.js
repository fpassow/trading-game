import React from 'react'
import imagesByType from '../imagesByType'
import {FLORIN_MARK} from '../constants'


/**
 * This component displays one unit of cargo, on the dock or in the hold.
 * If a price isn't null, the component can be clicked to trigger a buy or sell.
 * If the "empty" param is true, this component displays an empty cargo bay.
 * 
 * empty - If true, don't show any cargo. But keep the same size and positioning.
 * 
 * aCargo - will to be an object like: {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil',
 *                                   isLoaded: false, placeId: 'portharbor', shipId: null}
 * 
 * price - the buying or selling price.
 * 
 * enabled - controls whether the component is clickable
 * 
 * cargoClicked - a function which expects a cargoId. A cargo-buying or cargo-selling function should be passed depending
 *               on where this component is used.
 */

const buttonStyle = (cargo) => {
    return {
        height:'50px',
        width: '50px',
        background: (cargo) ? 'url(' + imagesByType[cargo.cargoType] + ') no-repeat' : 'inherit',
        paddingTop: '30px',
        fontWeight: 'bold',
        color: 'gold',
        textShadow: '1px 1px 2px black'
    }
}
const Cargo = ({empty, aCargo, price, enabled, cargoClicked}) => {
    if (empty) {
        return (
            <button title={"empty"} disabled style={buttonStyle(aCargo)}>
                &nbsp;
            </button>
        )
    }
    if (enabled) {
        return (
            <button title={aCargo.cargoLabel} onClick={()=>{cargoClicked(aCargo.cargoId)}} style={buttonStyle(aCargo)}>
                {price}{FLORIN_MARK}
            </button>
        )
    } else {
        return (
            <button title={aCargo.cargoLabel} disabled style={buttonStyle(aCargo)}>
                &nbsp;
            </button>
        )
    }
}

export default Cargo