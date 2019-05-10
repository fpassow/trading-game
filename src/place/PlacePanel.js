import React from 'react'
import { connect } from 'react-redux'
import ShipsForSale from './ShipsForSale'
import CargosForSale from './CargosForSale'
import Chandler from './Chandler'
import { getCurrentPlace, getShipsForSaleHere, getCargoForSaleHere, numberOfEmptyCargoBays } from '../stateUtils'
import { buyShip, buyFood, buyCargo } from '../actions'

const PlacePanelComponent = (
  {place, 
    cash, 
    shipsForSale, 
    cargosForSale, 
    hasShip, 
    numberOfEmptyCargoBays, 
    buyShip, 
    buyFood, 
    buyCargo}
) => {
    return (<div>
      <div style={{ background: '#ad0' }}>
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
      </div>
      <ShipsForSale shipsForSale={shipsForSale} cash={cash} buyShip={buyShip} />
      <Chandler hasShip={hasShip} place={place} buyFood={buyFood} />
      <CargosForSale prices={place.prices} hasShip={hasShip} numberOfEmptyCargoBays={numberOfEmptyCargoBays} cargosForSale={cargosForSale} cash={cash} buyCargo={buyCargo} />
    </div>);
  }

const mapStateToProps = state => ({
  place: getCurrentPlace(state),
  shipsForSale: getShipsForSaleHere(state),
  cargosForSale: getCargoForSaleHere(state),
  cash: state.cash,
  hasShip: !!state.myShipId,
  numberOfEmptyCargoBays: numberOfEmptyCargoBays(state)
})

const mapDispatchToProps = dispatch => ({
  buyShip: (shipId) => { dispatch(buyShip(shipId)) },
  buyFood: (placeId) => { dispatch(buyFood(placeId)) },
  buyCargo: (cargoId) => {dispatch(buyCargo(cargoId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacePanelComponent)