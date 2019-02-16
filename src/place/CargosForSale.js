import React from 'react'

export default function CargosForSaleComponent({prices, hasShip, cargosForSale, cash, buyCargo}) {
    return (
        <div >
            <h3>Cargos for Sale</h3>
            {JSON.stringify(cargosForSale)}
            {cargosForSale.map((cargo)=>{
                let price = prices[cargo.cargoType]
                return (
                    <CargoForSale
                        key={cargo.cargoId} 
                        buyCargo={buyCargo} 
                        cargo={cargo} 
                        price={price}
                        canBuy={hasShip && (price <= cash)}
                    />
                )
                
            })}
        </div>
    )
}

function  CargoForSale({cargo, canBuy, buyCargo, price}) {
    return (
        <div >
            {cargo.cargoLabel} &nbsp;
            {price}&#402; &nbsp;
            {canBuy ? <button onClick={()=>{buyCargo(cargo.cargoId)}}>buy</button> : ' '}
        </div>
    )
}

