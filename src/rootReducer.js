import state0 from './state0'
import * as stateUtils from './stateUtils'

function rootReducer(state = state0, action) {
    console.log(action)
    switch (action.type) {

  	    case 'SHOW_WELCOME_PAGE':
            return {...state, showingWelcomePage: action.showing}

        case 'BUY_SHIP':
            //Make the ship my ship and pay for it
            let newCash = state.cash - stateUtils.getShipById(action.shipId, state).basePrice
            //...but not if I don't have the money.
            if (newCash < 0) {
                return state
            }
            let newState = {...state, myShipId: action.shipId, cash: newCash}
            //Remove the ship from the local shipsForSale
            let newHere = {...stateUtils.getCurrentDynamicPlace(state)}
            newHere.shipsForSale = newHere.shipsForSale.filter((shipId)=>(shipId !== action.shipId))
            newState.placeData = state.placeData.map((place)=>(
                place.placeId === newHere.placeId ? newHere : place
            ))
            return newState

        case 'BUY_FOOD': {
            let newState = {...state}
            let myShip = stateUtils.getMyShip(state)
            //Bail out if there's no room for more food
            if (myShip.food >= myShip.maxFood) {
                return state
            }
            let myShipId = myShip.shipId
            let newFood = myShip.food + 1
            newState.cash = state.cash - stateUtils.currentPlaceInfo(state).foodPrice
            newState.ships = state.ships.map((ship)=>{
                if (ship.shipId === myShipId) {
                    return {...ship, food: newFood}
                } else {
                    return ship
                }
            })
            return newState
        }

        case 'BUY_CARGO': //action.cargoId
            //Get the cargo object
            let here = currentPlaceInfo(state)
            let cargoArr = here.cargoForSale.filter((cargo)=>(cargo.cargoId === action.cargoId))
            if (!cargoArr) {
                //bail out of cargo doesn't exist
                return state
            }
            let cargo = cargoArr[0]
            //remove from place's cargoForSale array
            let newCargoForSale = here.cargoForSale.filter((cargo)=>(cargo.cargoId !== action.cargoId))
            //add to ship's cargo array
            //deduct from cash
            //Build new state object


        default:
            return state;
    }
}

export default rootReducer
