import React from 'react'
import { connect } from 'react-redux'
import staticState from './staticState'

const PlacePanelComponent = ({place}) => (
    <div >
        <h2>{place.name}</h2>
        <h3>{place.description}</h3>
    </div>
)


const mapStateToProps = state => ({
  place: staticState.getPlaceById(
    state.currentPlaceId) || staticState.getPlaceById(staticState.defaultPlaceId
  )
})

export default connect(
  mapStateToProps
)(PlacePanelComponent)