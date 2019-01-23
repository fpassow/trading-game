import React from 'react'
import { connect } from 'react-redux'
import ShipsForSale from './ShipsForSale'
import { currentPlaceInfo } from './stateUtils'
import { buyShip } from './actions'

const PlacePanelComponent = ({place, cash, buyShip}) => (
    <div >
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
        <ShipsForSale shipsForSale={place.shipsForSale} cash={cash} buyShip={buyShip} />
    </div>
)

const mapStateToProps = state => ({
  place: currentPlaceInfo(state),
  cash: state.cash
})

const mapDispatchToProps = dispatch => ({
  buyShip: (shipId) => { dispatch(buyShip(shipId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacePanelComponent)