import React from 'react'
import { connect } from 'react-redux'
import TimeView from './TimeView'

const mapStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 100px)',
    gridTemplateRows: 'repeat(6, 100px)'
}

const MapPanelComponent = ({ticks, days, ticksToday, places}) => (
    <div >
        <TimeView days={days} ticks={ticks} ticksToday={ticksToday} />
        <div style={mapStyle}>
            {places.map((p)=>(<div style={{gridColumn: p.x, gridRow: p.y}} key={p.placeId}>{p.placeId}</div>))}
        </div>
    </div>
)


const mapStateToProps = state => ({
  days: state.days,
  ticks: state.ticks,
  ticksToday: state.ticksToday,
  places: state.places
})

export default connect(
  mapStateToProps
)(MapPanelComponent)