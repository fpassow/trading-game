import React from 'react'


const TimeView = ({ticks, days, ticksToday, isMoving, moveEndTime}) => (
    <div >
        <h3 style={{color:'white'}}>Day {days}  [{ticksToday}] &nbsp; 
        {(isMoving) ? "Sailing... " + (moveEndTime - ticks) : ""}</h3>
    </div>
)

export default TimeView
