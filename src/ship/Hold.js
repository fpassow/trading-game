import React from 'react'

const Hold = ({cargo, localPrices, sellCargo}) => {
    return (
        <div>
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