import React from 'react'
import { connect } from 'react-redux'

const MapPanelComponent = ({cash}) => (
    <div >
        <h2>Map</h2>
    </div>
)


const mapStateToProps = state => ({
  cash: state.cash
})

export default connect(
  mapStateToProps
)(MapPanelComponent)