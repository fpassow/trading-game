import React from 'react'
import { connect } from 'react-redux'
import * as stateUtils from './stateUtils'
import * as actions from './actions'
import {seaBlue} from './styleConstants'
import imagesByType from './imagesByType'
import TimeView from './TimeView'

/*
 * Mobile version of the component which draws the entire map, creating a square 
 * for each element in state.places.
 */

let mobileMapPanelStyle = {
    border: '1px solid blue',
    background: seaBlue
}

const mapStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    gridTemplateRows: 'repeat(8, 25vw)',
    fontWeight: 'bold',
    width: '100%'
}

const Square = ({p, myShip, myPlace, isDestination, isMoving, moveShip, selectShipTab}) => {
    const moveHandler = () => {
        if (isDestination) {
            moveShip(myShip.shipId, p.placeId)
        }
    }
    let background = 'inherit'
    if (p.placeType === 'LAND') {
        background = '#db8'
    }
    if (p.placeType === 'PORT') {
        background = '#ad0 no-repeat url("img/port.png")'
    }
    let border = '1px solid blue'
    if (isDestination && !isMoving) {
        border = '1px solid yellow'
    }
    let squareStyle = {
        border:border, 
        background: background,
        backgroundSize: 'contain',
        gridColumn: p.x, 
        gridRow: p.y, 
        margin:'0px',
        position: 'relative',
        backgroundPosition: 'bottom'
    }
    let arrowStyle = {
        transform: 'rotate('+_arrowRotation(p, myPlace)+'deg)',
        left: '25%',
        top: '25%',
        width: '50%',
        height: '50%',
        zIndex: 8,
        position: 'absolute'
    }
    let shipStyle={
        left: '25%',
        top: '25%',
        width: '50%',
        height: '50%',
        zIndex: 5,
        position: 'absolute',
        border: 'none'
    }
    let shipCssClass = isMoving ? 'bobbing' : 'notbobbing'
    let myShipIsHere = myShip && (myShip.placeId === p.placeId)
    let inPortHere = myShipIsHere && (p.placeType === 'PORT')
    return (
        <div style={squareStyle} 
             key={p.placeId}
             onClick={(inPortHere)? selectShipTab : moveHandler}
        >
            {p.placeType === 'PORT' ? p.name : ''}
            {(myShipIsHere) ? <img className={shipCssClass} style={shipStyle} alt={myShip.shipName} src={imagesByType[myShip.shipType]} /> : <span> </span>} 
            {(isDestination && !isMoving) ? <img style={arrowStyle} src="img/arrow_up.png" alt="You can move to here" /> : <span> </span>}
        </div>
    )
}

function _isDestination(place, myPlace, myShip) {
    //True if they are one square apart (not diagonal), and place is a port or sea square,
    // and you are not going overland from port to port
    return (
        (place.placeType === 'PORT' || place.placeType === 'AT_SEA' || myShip.isFlyer) && 
        (!(myPlace.placeType === 'PORT' && place.placeType === 'PORT') || myShip.isFlyer) &&
        ((Math.abs(place.x - myPlace.x) + Math.abs(place.y - myPlace.y)) === 1)
    )
}

//For a given place and the player's ships place, compute the degrees rotation
// from verticle for an arrow pointing away from the ship.
function _arrowRotation(place, myPlace) {
    if (myPlace.y > place.y) {
        return 0
    }
    if (myPlace.x > place.x) {
        return 270
    }
    if (myPlace.x < place.x) {
        return 90
    }
    //my y < y, arrow stays pointing up
    return 180
}

const timeContainerStyle = {
    position: 'fixed',
    top: '45px',
    right: '0px',
    zIndex: '5'
}
const MobileMapPanelComponent = ({
        ticks, days, ticksToday, places, myShip, myPlace, isMoving, moveShip, selectShipTab
    }) => {
    return (
        <div style={mobileMapPanelStyle}>
            <div style={timeContainerStyle}>
                <TimeView days={days} ticksToday={ticksToday} />
            </div>
            <div style={mapStyle}>
                {places.map((p)=>(<Square key={p.placeId} 
                                          p={p} 
                                          myShip={myShip} 
                                          myPlace={myPlace}
                                          isMoving={isMoving}
                                          isDestination={myShip && _isDestination(p, myPlace, myShip)}
                                          moveShip={moveShip} 
                                          selectShipTab={selectShipTab}
                                  />
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
  days: state.days,
  ticks: state.ticks,
  ticksToday: state.ticksToday,
  places: state.places,
  myShip: stateUtils.getMyShip(state),
  myPlace: stateUtils.getCurrentPlace(state),
  isMoving: state.isMoving
})

const mapDispatchToProps = dispatch => ({
    moveShip: (shipId, placeId) => { dispatch(actions.moveShip(shipId, placeId)) },
    selectShipTab: () => { dispatch(actions.selectShipTab()) }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMapPanelComponent)