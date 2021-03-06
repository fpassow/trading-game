import state0 from './state0'
import * as stateUtils from './stateUtils'
import tickHandler from './tickHandler'

/*
 * Redux reducer function
*/

function rootReducer(state = state0, action) {

    //See actions. Might remove this later.
    //But never show TICKs. There are too many.
    if (action.type !== 'TICK') {
        //console.log(action)
        //console.log(state)
    }
    
    switch (action.type) {

        //Note: The convention is that get functions in stateUtils return shallow copies, not objects from state
        //  and replace functions expect new objects that can be safely returned from the reducer

        case 'TICK':
            if (state.timeStop) {
                return state
            }
            return tickHandler(state)

  	    case 'SHOW_WELCOME_PAGE':
            return {...state, showingWelcomePage: action.showing, timeStop: action.showing}

        case 'START_NEW_GAME':
            return state0

        case 'SELECT_TAB':
            return {...state, selectedTab: action.whichTab}

        case 'BUY_SHIP':
            let ship = stateUtils.getShipById(action.shipId, state)
            let oldShip = stateUtils.getMyShip(state)
            let newCash = state.cash + (oldShip?oldShip.basePrice:0) - ship.basePrice
            //Abort if I don't have the money.
            if (newCash < 0) {
                return state
            }
            ship.isForSale = false
            let newState = stateUtils.replaceShip(ship, state)
            newState.myShipId = ship.shipId
            newState.cash = newCash
            if (oldShip) {
                oldShip.isForSale = true
                newState = stateUtils.replaceShip(oldShip, newState)
            }
            return newState

        case 'BUY_FOOD': { //action.placeId, action.quantity
            let myShip = stateUtils.getMyShip(state)
            //Bail out if there's no room for more food
            if (myShip.food + action.quantity > myShip.maxFood) {
                return state
            }
            //Bail if you can't afford it
            let newCash = state.cash - stateUtils.getCurrentPlace(state).foodPrice * action.quantity
            if (newCash < 0) {
                return state
            }
            //Add food to your ship
            myShip.food += action.quantity
            let newState = stateUtils.replaceShip(myShip, state)
            newState.cash = newCash
            return newState
        }

        case 'BUY_FUEL': { //action.placeId, action.quantity
            let myShip = stateUtils.getMyShip(state)
            //Bail out if there's no room for more fuel
            if (myShip.fuel + action.quantity > myShip.maxFuel) {
                return state
            }
            //Bail if you can't afford it
            let newCash = state.cash - stateUtils.getCurrentPlace(state).fuelPrice * action.quantity
            if (newCash < 0) {
                return state
            }
            //Add food to your ship
            myShip.fuel += action.quantity
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
            
            //You can't start a new move until the current move finishes
            if (state.isMoving) {
                return state
            }
            let newShip = stateUtils.getShipById(action.shipId, state)
            //Bail if we don't have enough fuel
            if (newShip.fuel < newShip.fuelPerMove) {
                //In port, we show a warning if you're out of fuel
                return {...state, selectedTab:'PORT'}
            }
            let newState = {...state, isMoving:true, moveEndTime:state.ticks+(24/newShip.speed)}
            //If player is aboard, the player also moves.
            if (newState.myShipId === action.shipId) {
                newState.currentPlaceId = action.placeId
            }
            newShip.placeId = action.placeId
            newShip.fuel -= newShip.fuelPerMove
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

        case 'RESET_STATE': {
            return state0
        }
            
        default:
            return state;
    }
}

export default rootReducer
