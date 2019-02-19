import React from 'react'
import { connect } from 'react-redux'
import TimeView from './TimeView'
import * as stateUtils from './stateUtils'
import * as actions from './actions'

let mapPanelStyle = {
    border: '1px solid blue',
    padding: '10px',
    background: '#88f'
}

const mapStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 100px)',
    gridTemplateRows: 'repeat(6, 100px)'
}

const Square = ({p, myShip, isDestination, moveShip}) => {
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
        background = '#ad0'
    }
    let border = '1px solid blue'
    if (isDestination) {
        border = '4px solid yellow'
    }
    let squareStyle = {
        border:border, 
        background: background,
        gridColumn: p.x, 
        gridRow: p.y, 
        margin:'0px'
    }
    return (
        <div style={squareStyle} 
             key={p.placeId}
             onClick={moveHandler}
        >
            {p.placeId} {(myShip && (myShip.placeId === p.placeId)) ? <img src="fishboat.png" /> : <span> </span>} 
        </div>
    )
}
//  let isDestination = myShip && (destinations.indexOf(myShip.placeId) > -1)
function _isDestination(destinations, placeId) {
    return destinations.indexOf(placeId) > -1
}

const MapPanelComponent = ({ticks, days, ticksToday, places, myShip, myPlace, moveShip}) => {
    let destinations = (myShip && myPlace) ? myPlace.neighbors : []
    return (
        <div style={mapPanelStyle}>
            <TimeView days={days} ticks={ticks} ticksToday={ticksToday} />
            <div style={mapStyle}>
                {places.map((p)=>(<Square key={p.placeId} 
                                          p={p} 
                                          myShip={myShip} 
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
  myPlace: stateUtils.getCurrentPlace(state)
})

const mapDispatchToProps = dispatch => ({
    moveShip: (shipId, placeId) => { dispatch(actions.moveShip(shipId, placeId)) }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPanelComponent)