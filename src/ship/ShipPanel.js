import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'
import Crew from './Crew'
import Fuel from './Fuel'
import Food from './Food'
import * as stateUtils from '../stateUtils'

const ShipPanelComponent = ({cash, myShip}) => (
    <div >
        <h3>The {myShip.shipTypeName} &nbsp;<em>{myShip.shipName}</em></h3>
        <Crew myShip={myShip} />
        <Food myShip={myShip} />
        <Fuel myShip={myShip} />
        <Cash />
    </div>
)

const mapStateToProps = state => ({
  cash: state.cash,
  myShip: stateUtils.getMyShip(state)
})

export default connect(
  mapStateToProps
)(ShipPanelComponent)