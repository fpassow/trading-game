import React from 'react'

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
            {aCargo.cargoLabel} {prices[aCargo.cargoType] ? 
                <span>{prices[aCargo.cargoType]}&#402; <button onClick={()=>{sellCargo(aCargo.cargoId)}}>Sell</button></span> :
                 ''
            } 
        </div>
    )
}

export default Hold