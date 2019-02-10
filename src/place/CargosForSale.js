import React from 'react'

export default function CargosForSaleComponent({hasShip, cargosForSale, cash, buyCargo}) {
    return (
        <div >
            <h3>Cargos for Sale</h3>
            {cargosForSale.map((cargo)=>(
                <CargoForSale
                    key={cargo.cargoId} 
                    buyCargo={buyCargo} 
                    cargo={cargo} 
                    canBuy={hasShip && (cargo.cargoPrice <= cash)}
                />
            ))}
        </div>
    )
}

function  CargoForSale({cargo, canBuy, buyCargo}) {
    return (
        <div >
            {cargo.cargoLabel} &nbsp;
            {cargo.cargoPrice}&#402; &nbsp;
            {canBuy ? <button onClick={()=>{buyCargo(cargo.cargoId)}}>buy</button> : ' '}
        </div>
    )
}

