import state0 from './state0'
import * as stateUtils from './stateUtils'

function rootReducer(state = state0, action) {
    console.log(action)
    switch (action.type) {

        //Note: The convention is that get functions in stateUtils return shallow copies, not objects from state
        //  and replace functions expect new objects that can be safely returned from the reducer

  	    case 'SHOW_WELCOME_PAGE':
            return {...state, showingWelcomePage: action.showing}

        case 'BUY_SHIP':
            let ship = stateUtils.getShipById(action.shipId, state)
            let newCash = state.cash - ship.basePrice
            //Abort if I don't have the money.
            if (newCash < 0) {
                return state
            }
            ship.isForSale = false
            let newState = stateUtils.replaceShip(ship, state)
            newState.myShipId = ship.shipId
            newState.cash = newCash
            return newState

        case 'BUY_FOOD': {
            let myShip = stateUtils.getMyShip(state)
            //Bail out if there's no room for more food
            if (myShip.food >= myShip.maxFood) {
                return state
            }
            let newCash = state.cash - stateUtils.getCurrentPlace(state).foodPrice
            if (newCash < 0) {
                return state
            }
            myShip.food++
            newSate = stateUtils.replaceShip(myShip, state)
            newState.cash = newCash
            return newState
        }

        case 'BUY_CARGO': //action.cargoId
            let cargo = stateUtils.getCargoById(action.cargoId, state)
            cargo.isForSale = false
            cargo.isLoaded = true
            cargo.placeId = null
            cargo.shipId = stateUtils.getMyShip(state).shipId
            return stateUtils.replaceCargo(cargo, state)
            
        default:
            return state;
    }
}

export default rootReducer
