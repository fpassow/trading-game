import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'

const ShipPanelComponent = ({cash}) => (
    <div >
      My ship
        <Cash />
    </div>
)


const mapStateToProps = state => ({
  cash: state.cash
})

export default connect(
  mapStateToProps
)(ShipPanelComponent)