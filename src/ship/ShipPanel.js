import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'
import Crew from './Crew'
import Fuel from './Fuel'
import Food from './Food'
import Hold from './Hold'
import * as stateUtils from '../stateUtils'

const ShipPanelComponent = ({cash, myShip, cargo, localPrices}) => (
    <div >
        <h3>The {myShip.shipTypeName} &nbsp;<em>{myShip.shipName}</em></h3>
        <Crew myShip={myShip} />
        <Food myShip={myShip} />
        <Fuel myShip={myShip} />
        <Hold cargo ={cargo} localPrices={localPrices} />
        <Cash />
    </div>
)

const mapStateToProps = state => ({
  cash: state.cash,
  myShip: stateUtils.getMyShip(state),
  cargo: stateUtils.getCargoOnBoard(state.myShipId, state),
  localPrices: stateUtils.getCurrentPlace(state).prices
})

export default connect(
  mapStateToProps
)(ShipPanelComponent)