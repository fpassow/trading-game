import * as stateUtils from './stateUtils'
import * as factories from './factories'

export default function tickHandler(state) {
    let newState = {...state}

    //Check victory condition
    if (newState.cash >= newState.cashToWin) {
        newState.timeStop = true
        return newState
    }

    //Slow time by 20x when in port or deciding where to move next at sea,
    //    i.e. when state.isMoving is false.
    if (!state.isMoving) {
        if (state.slowTimeCounter <= 4) {
            return {...state, slowTimeCounter: state.slowTimeCounter + 1}
        } else {
            newState.slowTimeCounter = 0
        }
    }

    //A day is 24 ticks.
    //state contains ticks, days, and ticksToday for other logic to use.
    //ticksToday rolls back to zero at the end of each day, like a clock. While ticks just
    //  keeps rising.
    newState = {...newState, ticks: state.ticks + 1, ticksToday: state.ticksToday + 1}
    newState = doTickly(newState)
    if (newState.ticksToday === 24) {
        newState.days = newState.days + 1
        newState.ticksToday = 0
        newState = doDaily(newState)
    }
    return newState
}

function doTickly(s) {
    return checkMoveCompleted(s)
}

function checkMoveCompleted(state) {
    if (state.isMoving && (state.ticks >= state.moveEndTime)) {
        return {...state, isMoving:false, moveEndTime:null}
    } else {
        return state
    }
}

function doDaily(state) {
    return producersProduce(eatFood(state))
}

function eatFood(s) {
    let cash = s.cash
    let currentPlace = stateUtils.getCurrentPlace(s)
    let isFoodForSale = currentPlace.isFoodForSale
    let foodPrice = isFoodForSale ? currentPlace.foodPrice : -1
    //No ship. Player buys food for self each day.
    if (!s.myShipId) {
        if (isFoodForSale && (cash >= foodPrice)) {
            floatNote('Buying food.')
            return {...s, cash: cash - foodPrice}
        } else {
            return {...s, cash: cash - foodPrice, gameOver: true}
        }
    //Player has a ship...
    } else {
        let myShip = stateUtils.getMyShip(s)
        //Assume ship always has a full crew
        let crew = myShip.crewSize

        //Loop once for each person in the crew. Try to get a food each time.
        for (let crewPerson = 1; crewPerson <= crew; crewPerson++) {
            if (myShip.food >= 1) {
                myShip.food = myShip.food - 1
                s = stateUtils.replaceShip(myShip, s)
            } else {
                if (isFoodForSale && (cash >= foodPrice)) {
                    s = {...s, cash: cash - foodPrice}
                } else {
                    s = {...s, gameOver: true, gameOverMessage: 'You starved.'}
                }
            }
        }
        return s
    }
}

//Powers state.cargoProducers, which look like:
//    {placeId: 'portharbor', period: 2, cargoType: 'oliveoil', quantity: 1}
//Updates state.cargos, which look like:
//    {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', 
//       cargoType: 'oliveoil', cargoPrice: 50, isLoaded: false, placeId: 'portharbor', 
//       shipId: null},
function producersProduce(oldState) {
    let newCargos = [ ...oldState.cargos]
    oldState.cargoProducers.forEach((p)=>{
        if (!(oldState.days % p.period)) {
            for (let i = 0; i < p.quantity; i++) {
                newCargos.push(factories.cargoFactory(p.cargoType, p.placeId))
            }
        }
    })
    return {...oldState, cargos: newCargos}
}

function floatNote(text) {
    console.log('FloatNote: ' + text)
}