import React from 'react'
import PlacePanel from './PlacePanel'
import ShipPanel from './ship/ShipPanel'
import ShiplessPanel from './ship/ShiplessPanel'
import MapPanel from './MapPanel'

const MainPage = ({showWelcomePage, hasShip}) => (
    <div >
        <PlacePanel />
        {hasShip ? <ShipPanel /> : <ShiplessPanel />}
        <MapPanel />
        <button onClick={showWelcomePage} >Help</button>
    </div>
)

export default MainPage