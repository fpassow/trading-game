import state0 from './state0'
import * as stateUtils from './stateUtils'

function rootReducer(state = state0, action) {
    switch (action.type) {

  	    case 'SHOW_WELCOME_PAGE':
            return {...state, showingWelcomePage: action.showing}

        case 'BUY_SHIP':
            //Make the ship my ship
            let newState = {...state, myShipId: action.shipId}
            //Remove the ship from the local shipsForSale
            let newHere = {...stateUtils.getCurrentDynamicPlace(state)}
            newHere.shipsForSale = newHere.shipsForSale.filter((shipId)=>(shipId !== action.shipId))
            newState.placeData = state.placeData.map((place)=>(
                place.placeId === newHere.placeId ? newHere : place
            ))
            return newState

        default:
            return state;
    }
}

export default rootReducer
