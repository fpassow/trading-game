import React from 'react'
import { connect } from 'react-redux'
import TimeView from './TimeView'
import * as stateUtils from './stateUtils'

const mapStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 200px)',
    gridTemplateRows: 'repeat(6, 200px)'
}

const Square = ({p, myShip, isDestination}) => {
    return (
        <div style={{gridColumn: p.x, gridRow: p.y, background: isDestination ? 'yellow':'inherit'   }} key={p.placeId}>
            {p.placeId} {(myShip && (myShip.placeId === p.placeId)) ? <span>{myShip.shipName}</span> : <span> </span>} 
        </div>
    )
}
//  let isDestination = myShip && (destinations.indexOf(myShip.placeId) > -1)
function _isDestination(destinations, placeId) {
    return destinations.indexOf(placeId) > -1
}

const MapPanelComponent = ({ticks, days, ticksToday, places, myShip, myPlace, myShipId}) => {
    let destinations = (myShip && myPlace) ? myPlace.neighbors : []
    return (
        <div>
            <TimeView days={days} ticks={ticks} ticksToday={ticksToday} />
            <div style={mapStyle}>
                {places.map((p)=>(<Square key={p.placeId} 
                                          p={p} 
                                          myShip={myShip} 
                                          isDestination={_isDestination(destinations, p.placeId)} 
                                  />
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
  days: state.days,
  ticks: state.ticks,
  ticksToday: state.ticksToday,
  places: state.places,
  myShip: stateUtils.getMyShip(state),
  myPlace: stateUtils.getCurrentPlace(state)
})

export default connect(
  mapStateToProps
)(MapPanelComponent)