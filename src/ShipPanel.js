import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'
import Crew from './Crew'
import * as stateUtils from './stateUtils'

const ShipPanelComponent = ({cash, myShip}) => (
    <div >
        {myShip ? <Crew myShip={myShip} /> : ''}
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