import React from 'react'
import { connect } from 'react-redux'
import ShipsForSale from './ShipsForSale'
import CargosForSale from './CargosForSale'
import Chandler from './Chandler'
import FuelDepot from './FuelDepot'
import { getCurrentPlace, getShipsForSaleHere, getCargoForSaleHere, getMyShip, numberOfEmptyCargoBays } from '../stateUtils'
import { buyShip, buyFood, buyFuel, buyCargo } from '../actions'

/*
 * The PlacePanel is the top level component in this directory.
 * It represents a seaport, and has sub-components showing things for sale,
 * liek ships, cargos, rations, and fuel.
 */


const PlacePanelComponent = (
  {place, 
    cash, 
    shipsForSale, 
    cargosForSale, 
    hasShip, 
    myShip,
    numberOfEmptyCargoBays, 
    buyShip, 
    buyFood,
    buyFuel, 
    buyCargo}
) => {
    let cashPlusTradeIn = cash + (myShip?myShip.basePrice:0)
    return (<div style={{ background: '#ad0' }}>
      <div >
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
      </div>
      <ShipsForSale shipsForSale={shipsForSale} cash={cashPlusTradeIn} buyShip={buyShip} />
      {myShip.fuel < myShip.fuelPerMove ?  <h2 style={{color:'red'}}>Buy fuel!!</h2> : ''}
      <Chandler hasShip={hasShip} place={place} myShip={myShip} buyFood={buyFood} />
      <CargosForSale prices={place.prices} hasShip={hasShip} numberOfEmptyCargoBays={numberOfEmptyCargoBays} cargosForSale={cargosForSale} cash={cash} buyCargo={buyCargo} />
      <FuelDepot hasShip={hasShip} place={place} myShip={myShip} buyFuel={buyFuel} />
    </div>);
  }

const mapStateToProps = state => ({
  place: getCurrentPlace(state),
  shipsForSale: getShipsForSaleHere(state),
  cargosForSale: getCargoForSaleHere(state),
  cash: state.cash,
  hasShip: !!state.myShipId,
  myShip: getMyShip(state),
  numberOfEmptyCargoBays: numberOfEmptyCargoBays(state)
})

const mapDispatchToProps = dispatch => ({
  buyShip: (shipId) => { dispatch(buyShip(shipId)) },
  buyFood: (placeId, quantity) => { dispatch(buyFood(placeId, quantity)) },
  buyFuel: (placeId, quantity) => { dispatch(buyFuel(placeId, quantity)) },
  buyCargo: (cargoId) => {dispatch(buyCargo(cargoId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacePanelComponent)