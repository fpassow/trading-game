import React from 'react'

const Hold = ({cargo}) => {
    return (
        <div>
            <h3>Cargo </h3>
            {cargo.map((aCargo)=>(<Cargo key={aCargo.cargoId} aCargo={aCargo} />))}
        </div>
    )
}

const Cargo = ({aCargo}) => {
    return (
        <div>
            {aCargo.cargoLabel}
        </div>
    )
}

export default Hold