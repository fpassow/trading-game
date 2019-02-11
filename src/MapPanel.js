import React from 'react'
import { connect } from 'react-redux'
import TimeView from './TimeView'
import * as stateUtils from './stateUtils'

const mapStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 200px)',
    gridTemplateRows: 'repeat(6, 200px)'
}

const Square = ({p, myShip}) => (
    <div style={{gridColumn: p.x, gridRow: p.y}} key={p.placeId}>
        {p.placeId} {(myShip && (myShip.placeId === p.placeId)) ? <span>{myShip.shipName}</span> : <span> </span>} 
    </div>
)

const MapPanelComponent = ({ticks, days, ticksToday, places, myShip}) => (
    <div>
        <TimeView days={days} ticks={ticks} ticksToday={ticksToday} />
        <div style={mapStyle}>
            {places.map((p)=>(<Square key={p.placeId} p={p} myShip={myShip} />))}
        </div>
    </div>
)


const mapStateToProps = state => ({
  days: state.days,
  ticks: state.ticks,
  ticksToday: state.ticksToday,
  places: state.places,
  myShip: stateUtils.getMyShip(state)
})

export default connect(
  mapStateToProps
)(MapPanelComponent)