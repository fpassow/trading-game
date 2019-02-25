import state0 from './state0'
import * as stateUtils from './stateUtils'
import tickHandler from './tickHandler'

function rootReducer(state = state0, action) {

    //See actions. Might remove this later.
    //But never show TICKs. There are too many.
    if (action.type !== 'TICK') {
        console.log(action)
    }
    
    switch (action.type) {

        //Note: The convention is that get functions in stateUtils return shallow copies, not objects from state
        //  and replace functions expect new objects that can be safely returned from the reducer

        case 'TICK':
            return tickHandler(state)

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
            ship.crew = 1
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
            let newState = stateUtils.replaceShip(myShip, state)
            newState.cash = newCash
            return newState
        }

        case 'BUY_CARGO': {
            let cargo = stateUtils.getCargoById(action.cargoId, state)
            let newCash = state.cash - stateUtils.getPlaceById(cargo.placeId, state).prices[cargo.cargoType]
            if (newCash <= 0) {
                return state
            }
            cargo.isForSale = false
            cargo.isLoaded = true
            cargo.placeId = null
            cargo.shipId = stateUtils.getMyShip(state).shipId
            let newState = stateUtils.replaceCargo(cargo, state)
            newState.cash = newCash
            return newState
        }

        case 'MOVE_SHIP': {
            //action.shipId, action.placeId
            let newState = {...state}
            //If player is aboard, the player also moves.
            if (newState.myShipId === action.shipId) {
                newState.currentPlaceId = action.placeId
            }
            let newShip = stateUtils.getShipById(action.shipId, newState)
            newShip.placeId = action.placeId
            let newerState = stateUtils.replaceShip(newShip, newState)
            return newerState
        }

        case 'SELL_CARGO': {
            let cargo = stateUtils.getCargoById(action.cargoId, state)
            let newCash = state.cash + stateUtils.getCurrentPlace(state).prices[cargo.cargoType]
            let newState = stateUtils.removeCargo(cargo, state)
            newState.cash = newCash
            return newState
        }
            
        default:
            return state;
    }
}

export default rootReducer
