import React from 'react'
import PlacePanel from './place/PlacePanel'
import ShipPanel from './ship/ShipPanel'
import ShiplessPanel from './ship/ShiplessPanel'
import MapPanel from './MapPanel'

let mainPageStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
}

const MainPage = ({showWelcomePage, hasShip, isInPort}) => (
    <div style={mainPageStyle}>
        {isInPort ? <PlacePanel /> : <div>At sea....</div>}
        {hasShip ? <ShipPanel /> : <ShiplessPanel />}
        <MapPanel showWelcomePage={showWelcomePage} />
    </div>
)

export default MainPage