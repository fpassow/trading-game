import React from 'react'
import Cargo from '../shared_components/Cargo'

/*
 * This is the component within the Ship component which displays all the
 * cargo on board. The Cargo component has an "empty" property and an empty
 * Cargo represents an empty cargo bay. So we always display 
 * myShip.maxCargo Cargo components.
 */

const holdStyle = {
    border: '3px solid brown',
    borderRadius: '5px',
    padding: '3px',
    position: 'relative',
    minHeight: '50px'
}
const Hold = ({myShip, cargo, localPrices, sellCargo}) => {
    const emptyCargoBays = []
    for (let i = 0; i < (myShip.maxCargo - cargo.length); i++) {
        emptyCargoBays.push(<Cargo key={i} empty={true} />)
    }
    return (
        <div style={holdStyle}>
                {cargo.map((aCargo)=>(
                    <Cargo empty={false} key={aCargo.cargoId} cargoClicked={sellCargo} aCargo={aCargo} 
                           enabled={!!localPrices[aCargo.cargoType]} price={localPrices[aCargo.cargoType]} 
                    />
                ))}
                {emptyCargoBays}
        </div>
    )
}

export default Hold