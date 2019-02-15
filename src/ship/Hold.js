import React from 'react'

const Hold = ({cargo, localPrices}) => {
    return (
        <div>
            <h3>Cargo </h3>
            {cargo.map((aCargo)=>(<Cargo key={aCargo.cargoId} aCargo={aCargo} prices={localPrices} />))}
        </div>
    )
}

const Cargo = ({aCargo, prices}) => {
    return (
        <div>
            {aCargo.cargoLabel} {prices[aCargo.cargoType] ? <span>{prices[aCargo.cargoType]}&#402;</span> : ''} 
        </div>
    )
}

export default Hold