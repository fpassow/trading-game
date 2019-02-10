import React from 'react'
import { connect } from 'react-redux'
import ShipsForSale from './ShipsForSale'
import CargosForSale from './CargosForSale'
import Chandler from './Chandler'
import { getCurrentPlace, getShipsForSaleHere, getCargoForSaleHere } from '../stateUtils'
import { buyShip, buyFood, buyCargo } from '../actions'

const PlacePanelComponent = ({place, cash, shipsForSale, cargosForSale, hasShip, buyShip, buyFood, buyCargo}) => (
    <div >
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
        <ShipsForSale shipsForSale={shipsForSale} cash={cash} buyShip={buyShip} />
        <CargosForSale cargosForSale={cargosForSale} cash={cash} buyCargo={buyCargo} />
        <Chandler hasShip={hasShip} place={place} buyFood={buyFood} />
    </div>
)

const mapStateToProps = state => ({
  place: getCurrentPlace(state),
  shipsForSale: getShipsForSaleHere(state),
  cargosForSale: getCargoForSaleHere(state),
  cash: state.cash,
  hasShip: !!state.myShipId
})

const mapDispatchToProps = dispatch => ({
  buyShip: (shipId) => { dispatch(buyShip(shipId)) },
  buyFood: () => { dispatch(buyFood()) },
  buyCargo: (cargoId) => {dispatch(buyCargo(cargoId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacePanelComponent)