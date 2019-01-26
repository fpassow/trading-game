import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'

const ShiplessPanelComponent = ({cash, myShip}) => (
    <div >
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