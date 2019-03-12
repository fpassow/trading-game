import React from 'react'
import imagesByType from '../imagesByType'

const holdStyle = {
    border: '3px solid brown',
    background: 'grey',
    borderRadius: '5px'
}
const Hold = ({cargo, localPrices, sellCargo}) => {
    return (
        <div style={holdStyle}>
            <h3>Cargo </h3>
            {cargo.map((aCargo)=>(<Cargo key={aCargo.cargoId} sellCargo={sellCargo} aCargo={aCargo} prices={localPrices} />))}
        </div>
    )
}

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

export default Hold