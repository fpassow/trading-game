import React from 'react'
import PlacePanel from './PlacePanel'
import ShipPanel from './ShipPanel'
import MapPanel from './MapPanel'

const MainPage = ({showWelcomePage}) => (
    <div >
        <PlacePanel />
        <ShipPanel />
        <MapPanel />
        <button onClick={showWelcomePage} >Help</button>
    </div>
)

export default MainPage