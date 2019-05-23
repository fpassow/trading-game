import React from 'react'
import imagesByType from '../imagesByType'

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
/*
const disabledStyle = {
    width: '50px',
    height: '50px',
    //verticalAlign: 'bottom'
}
*/

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
                {price}&#402;
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

/*
 <div style={{display:'inline-block'}}>
                <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} style={disabledStyle} />
            </div>
            */


export default Cargo