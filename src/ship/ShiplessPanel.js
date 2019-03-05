import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'
import {seaBlue} from '../styleConstants'

const ShiplessPanelComponent = ({cash, myShip}) => (
    <div style={{background: seaBlue}}>
        Time to buy a ship.
        <Cash />
    </div>
)

const mapStateToProps = state => ({
  cash: state.cash,
})

export default connect(
  mapStateToProps
)(ShiplessPanelComponent)