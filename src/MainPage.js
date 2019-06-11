import React from 'react'
import PlacePanel from './place/PlacePanel'
import ShipPanel from './ship/ShipPanel'
import ShiplessPanel from './ship/ShiplessPanel'
import MapPanel from './MapPanel'
import MobileMapPanel from './MobileMapPanel'
import {seaBlue} from './styleConstants'
import {SCREEN_WIDTH_THRESHOLD} from './constants'

const mainPageStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
}
const mainPageStyleForMobile = {
    background: seaBlue,
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    width: '100%'
}

const MainPage = ({
    showWelcomePage, 
    hasShip, 
    isInPort, 
    screenWidth, 
    selectPortTab,
    selectShipTab,
    selectMapTab,
    selectedTab
}) => {
    if (screenWidth >= SCREEN_WIDTH_THRESHOLD) {
        return (
            <div style={mainPageStyle}>
                {isInPort ? <PlacePanel /> : <div style={{background:seaBlue}}> </div>}
                {hasShip ? <ShipPanel /> : <ShiplessPanel />}
                <MapPanel showWelcomePage={showWelcomePage} />
            </div>
        )
    } else {
        const portButtonDisabled = selectedTab === 'PORT' || !isInPort
        const shipButtonDisabled = selectedTab === 'SHIP' || !hasShip
        const mapButtonDisabled = selectedTab === 'MAP'
        return (
            <div style={mainPageStyleForMobile}>
                <div>
                    <button disabled={portButtonDisabled} onClick={selectPortTab}>Port</button>
                    <button disabled={shipButtonDisabled} onClick={selectShipTab}>My Ship</button>
                    <button disabled={mapButtonDisabled} onClick={selectMapTab}>Map</button>
                    Time View
                    <button onClick={showWelcomePage}>(?)</button>
                </div>
                {selectedTab === 'PORT' ?
                  <PlacePanel /> : ( selectedTab === 'SHIP' ? <ShipPanel /> : <MobileMapPanel />)
                }
            </div>
        )
    }
}

export default MainPage
