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
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '0px'
}
const mainPageStyleForMobile = {
    background: seaBlue,
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    width: '100%'
}
const disabledButtonStyle = {
    background: '#668',
    fontWeight: 'bold',
    fontSize: '30px',
    width: '28%'
}
const enabledButtonStyle = {
    background: 'yellow',
    fontWeight: 'bold',
    fontSize: '30px',
    width: '28%'
}
const youarehereButtonStyle = {
    background: seaBlue,
    color: 'black',
    fontWeight: 'bold',
    fontSize: '30px',
    border: 'none',
    width: '28%'
}
const helpButtonStyle = {
    width: '16%',
    background: seaBlue,
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'yellow',
    border: 'none',
}
const mobileNavStyle = {
    position: 'fixed',
    width: '100%',
    top: '0px',
    left: '0px',
    zIndex: '10'
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
        const portButtonStyle = (selectedTab === 'PORT') ? youarehereButtonStyle : enabledButtonStyle
        const portButtonDisabled = selectedTab === 'PORT'

        const shipButtonStyle = (selectedTab === 'SHIP') ? youarehereButtonStyle : 
            ( hasShip ? enabledButtonStyle : disabledButtonStyle)
        const shipButtonDisabled = !hasShip || (selectedTab === 'SHIP')

        const mapButtonStyle = (selectedTab === 'MAP') ? youarehereButtonStyle : enabledButtonStyle
        const mapButtonDisabled = selectedTab === 'MAP'

        return (
            <div style={mainPageStyleForMobile}>
                <div style={mobileNavStyle}>
                    <button disabled={portButtonDisabled} 
                            onClick={selectPortTab}
                            style={portButtonStyle}
                    >Port</button>
                    <button disabled={shipButtonDisabled} 
                            onClick={selectShipTab}
                            style={shipButtonStyle}
                    >Ship</button>
                    <button disabled={mapButtonDisabled} 
                            onClick={selectMapTab}
                            style={mapButtonStyle}
                    >Map</button>
                    <button style={helpButtonStyle} onClick={showWelcomePage}> ? </button>
                </div>
                <div style={{height:'40px'}}> </div>
                {selectedTab === 'PORT' ?
                  <PlacePanel /> : ( selectedTab === 'SHIP' ? <ShipPanel /> : <MobileMapPanel />)
                }
            </div>
        )
    }
}

export default MainPage
