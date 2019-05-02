import React from 'react'
import Cargo from '../shared_components/Cargo'

const holdStyle = {
    border: '3px solid brown',
    background: 'grey',
    borderRadius: '5px',
    height: '300px',
    position: 'relative'
}
const cargoDivStyle = {
    position: 'absolute'
}
const Hold = ({cargo, localPrices, sellCargo}) => {
    return (
        <div style={holdStyle}>
            <div style={cargoDivStyle}>
                {cargo.map((aCargo)=>(
                    <Cargo key={aCargo.cargoId} sellCargo={sellCargo} aCargo={aCargo} 
                           enabled={!!localPrices[aCargo.cargoType]} price={localPrices[aCargo.cargoType]} 
                    />
                ))}
            </div>
            <h3>Cargo </h3>
        </div>
    )
}

/*
const Cargo = ({aCargo, prices, sellCargo}) => {
    return (
        <div style={cargoStyle}>
            {prices[aCargo.cargoType] ? 
                <div>
                    <button onClick={()=>{sellCargo(aCargo.cargoId)}}>
                        <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} /><br/>
                        {prices[aCargo.cargoType]}&#402;
                    </button>
                </div> :
                <div>
                    <img src={imagesByType[aCargo.cargoType]} alt={aCargo.cargoLabel} /><br/>
                </div>
            } 
        </div>
    )
}
/*
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
*/

export default Hold