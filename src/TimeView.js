import React from 'react'

const timeViewStyle = {
    fontWeight: 'bold',
    border: '2px solid white',
    borderRadius: '4px',
    color: 'white',
    paddingLeft: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '120px'
}
const dayStyle = {
    display: 'inline-block',
    width: '60px',
    textAlign: 'left'
}
const bellsStyle = {
    display: 'inline-block',
    width: '50px',
    textAlign: 'right'
}
const TimeView = ({ticks, days, ticksToday}) => (
    <div style={timeViewStyle}>
        <div style={dayStyle}>Day {days},</div>
        <div style={bellsStyle}>{ticksToday}:00</div>
    </div>
)

export default TimeView
