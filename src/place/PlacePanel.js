import React from 'react'
import { connect } from 'react-redux'
import ShipsForSale from './ShipsForSale'
import CargosForSale from './CargosForSale'
import Chandler from './Chandler'
import { currentPlaceInfo } from '../stateUtils'
import { buyShip, buyFood, buyCargo } from '../actions'

const PlacePanelComponent = ({place, cash, buyShip, buyFood}) => (
    <div >
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
        <ShipsForSale shipsForSale={place.shipsForSale} cash={cash} buyShip={buyShip} />
        <CargosForSale cargosForSale={place} cash={cash} buyCargo={buyCargo} />
        <Chandler place={place} buyFood={buyFood} />
    </div>
)

const mapStateToProps = state => ({
  place: currentPlaceInfo(state),
  cash: state.cash
})

const mapDispatchToProps = dispatch => ({
  buyShip: (shipId) => { dispatch(buyShip(shipId)) },
  buyFood: () => { dispatch(buyFood()) },
  buuCargo: (cargoId) => { dispatch(buyCargo(cargoId, placeId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacePanelComponent)