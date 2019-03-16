import React from 'react'
import { connect } from 'react-redux'
import TimeView from './TimeView'
import * as stateUtils from './stateUtils'
import * as actions from './actions'
import {seaBlue} from './styleConstants'

let mapPanelStyle = {
    border: '1px solid blue',
    padding: '10px',
    background: seaBlue
}

const mapStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 100px)',
    gridTemplateRows: 'repeat(6, 100px)'
}

const Square = ({p, myShip, myPlace, isDestination, isMoving, moveShip}) => {
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
        background = '#ad0 no-repeat url("port.png")'
    }
    let border = '1px solid blue'
    if (isDestination && !isMoving) {
        border = '1px solid yellow'
    }
    let squareStyle = {
        border:border, 
        background: background,
        gridColumn: p.x, 
        gridRow: p.y, 
        margin:'0px',
        position: 'relative'
    }
    let arrowStyle = {
        transform: 'rotate('+_arrowRotation(p, myPlace)+'deg)',
        left: '25px',
        top: '25px',
        zIndex: 10,
        position: 'absolute'
    }
    let shipStyle={
        left: '18px',
        top: '18px',
        zIndex: 5,
        position: 'absolute',
        border: 'none'
    }
    let shipCssClass = isMoving ? 'bobbing' : 'notbobbing'
    return (
        <div style={squareStyle} 
             key={p.placeId}
             onClick={moveHandler}
        >
            {p.placeType === 'PORT' ? p.name : ''}
            {(myShip && (myShip.placeId === p.placeId)) ? <img className={shipCssClass} style={shipStyle} alt={myShip.shipName} src="fishboat.png" /> : <span> </span>} 
            {(isDestination && !isMoving) ? <img style={arrowStyle} src="arrow_up.png" alt="You can move to here" /> : <span> </span>}
        </div>
    )
}
//  let isDestination = myShip && (destinations.indexOf(myShip.placeId) > -1)
function _isDestination(destinations, placeId) {
    return destinations.indexOf(placeId) > -1
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

const MapPanelComponent = ({
        ticks, days, ticksToday, places, myShip, myPlace, isMoving, moveEndTime, moveShip
    }) => {
    let destinations = (myShip && myPlace) ? myPlace.neighbors : []
    return (
        <div style={mapPanelStyle}>
            <TimeView days={days} ticks={ticks} ticksToday={ticksToday} isMoving={isMoving} moveEndTime={moveEndTime} />
            <div style={mapStyle}>
                {places.map((p)=>(<Square key={p.placeId} 
                                          p={p} 
                                          myShip={myShip} 
                                          myPlace={myPlace}
                                          isMoving={isMoving}
                                          isDestination={_isDestination(destinations, p.placeId)}
                                          moveShip={moveShip} 
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
  isMoving: state.isMoving,
  moveEndTime: state.moveEndTime
})

const mapDispatchToProps = dispatch => ({
    moveShip: (shipId, placeId) => { dispatch(actions.moveShip(shipId, placeId)) }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPanelComponent)