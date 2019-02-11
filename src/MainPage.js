import React from 'react'
import PlacePanel from './place/PlacePanel'
import ShipPanel from './ship/ShipPanel'
import ShiplessPanel from './ship/ShiplessPanel'
import MapPanel from './MapPanel'

const MainPage = ({showWelcomePage, hasShip, isInPort}) => (
    <div >
        {isInPort ? <PlacePanel /> : <div>At sea....</div>}
        {hasShip ? <ShipPanel /> : <ShiplessPanel />}
        <MapPanel />
        <button onClick={showWelcomePage} >Help</button>
    </div>
)

export default MainPage