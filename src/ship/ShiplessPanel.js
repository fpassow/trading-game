import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'
import {seaBlue} from '../styleConstants'

/*
 * This component is displayed when the player doesn't own a ship.
 * However, it still displays the player's "cash box", showing how
 * much money they have to spend on ship.
 */
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