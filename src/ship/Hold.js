import React from 'react'
import Cargo from '../shared_components/Cargo'

const holdStyle = {
    border: '3px solid brown',
    background: 'grey',
    borderRadius: '5px',
    //height: '300px',
    position: 'relative'
}
const emptyBayStyle = {
    display: 'inline-block',
    boxSizing: 'border-box',
    width: '50px',
    height: '50px',
    background: '#333',
    border: '2px solid #666'
}
const Hold = ({myShip, cargo, localPrices, sellCargo}) => {
    const emptyCargoBays = []
    for (let i = 0; i < (myShip.maxCargo - cargo.length); i++) {
        emptyCargoBays.push(<div key={i} style={emptyBayStyle}></div>)
    }
    return (
        <div style={holdStyle}>
            
                {cargo.map((aCargo)=>(
                    <Cargo key={aCargo.cargoId} cargoClicked={sellCargo} aCargo={aCargo} 
                           enabled={!!localPrices[aCargo.cargoType]} price={localPrices[aCargo.cargoType]} 
                    />
                ))}
                {emptyCargoBays}
            
        </div>
    )
}

export default Hold