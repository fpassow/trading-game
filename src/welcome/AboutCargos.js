import React from 'react'
import {labelForCargoType} from '../factories'
import {basePrices} from '../state0_places'
import imagesByType from '../imagesByType'
import {FLORIN_MARK} from '../constants'
/*
 * This component displays an image and description for every kind
 * of cargo in the game.
 */
const cargoTypes = ['oliveoil', 'coal', 'leopardwood', 'clockworks', 'kippers', 'fluff']
const cargosContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}
const cagoDisplayStyle = {
    margin: '5px',
    textAlign: 'center',
    border: '1px solid gray',
    borderRadius: '10px',
    padding: '5px'
}
const AboutCargos = () => (
    <div>
        <h2>Cargos</h2>
        <p>Here are the kinds of cargo you will see in the game. Each cargo image
            represents the amount of cargo which will fit in one cargo bay.
            The buying or selling price is displayed whenever a cargo can be bought or sold.
            So you can click on any cargo image that is displaying a price.
        </p>
        <div style={cargosContainerStyle}>
            {cargoTypes.map((cargoType)=>(<CargoDisplay key={cargoType} cargoType={cargoType} />))}
        </div>
    </div>
)

const CargoDisplay = ({cargoType}) => (
    <div style={cagoDisplayStyle}>
        <h3>{labelForCargoType[cargoType]}</h3>
        <img src={imagesByType[cargoType]} alt={labelForCargoType[cargoType]} /><br />
        Avg price: {basePrices[cargoType]}{FLORIN_MARK}
    </div>
)

export default AboutCargos