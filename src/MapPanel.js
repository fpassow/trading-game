import React from 'react'
import { connect } from 'react-redux'
import TimeView from './TimeView'

const MapPanelComponent = ({ticks, days, ticksToday}) => (
    <div >
        <TimeView days={days} ticks={ticks} ticksToday={ticksToday} />
        <h2>Map</h2>
    </div>
)


const mapStateToProps = state => ({
  days: state.days,
  ticks: state.ticks,
  ticksToday: state.ticksToday
})

export default connect(
  mapStateToProps
)(MapPanelComponent)