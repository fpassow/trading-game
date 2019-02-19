import React from 'react'


const TimeView = ({ticks, days, ticksToday}) => (
    <div >
        <h3 style={{color:'white'}}>Day {days}  [{ticksToday}]</h3>
    </div>
)

export default TimeView
