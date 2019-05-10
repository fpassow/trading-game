import React from 'react'
import Cargo from '../shared_components/Cargo'

export default function CargosForSaleComponent({prices, hasShip, numberOfEmptyCargoBays, cargosForSale, cash, buyCargo}) {
    return (
        <div >
            <h3>Cargos for Sale</h3>
            {cargosForSale.map((cargo)=>{
                let price = prices[cargo.cargoType]
                return (
                    <Cargo
                        key={cargo.cargoId} 
                        cargoClicked={buyCargo} 
                        aCargo={cargo} 
                        price={price}
                        enabled={hasShip && (price <= cash) && numberOfEmptyCargoBays}
                    />
                )
                
            })}
        </div>
    )
}

