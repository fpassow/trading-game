import React from 'react'
import imagesByType from '../imagesByType'

export default function CargosForSaleComponent({prices, hasShip, cargosForSale, cash, buyCargo}) {
    return (
        <div >
            <h3>Cargos for Sale</h3>
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
            {cargo.cargoLabel} &nbsp; <img alt="" src={imagesByType[cargo.cargoType]}/>
            {price}&#402; &nbsp;
            {canBuy ? <button onClick={()=>{buyCargo(cargo.cargoId)}}>buy</button> : ' '}
        </div>
    )
}

