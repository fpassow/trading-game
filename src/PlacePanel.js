import React from 'react'
import { connect } from 'react-redux'
import ShipsForSale from './ShipsForSale'
import { currentPlaceInfo } from './stateUtils'

const PlacePanelComponent = ({place}) => (
    <div >
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
        <ShipsForSale shipsForSale={place.shipsForSale} />
    </div>
)


const mapStateToProps = state => ({
  place: currentPlaceInfo(state)
})

export default connect(
  mapStateToProps
)(PlacePanelComponent)