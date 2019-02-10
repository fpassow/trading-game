import * as stateUtils from './stateUtils'

export default function tickHandler(state) {
    //A day is 100 ticks.
    //state contains ticks, days, and ticksToday for other logic to use.
    //ticksToday rolls back to zero at the end of each day, like a clock. While ticks just
    //  keeps rising.
    let newState = {...state, ticks: state.ticks + 1, ticksToday: state.ticksToday + 1}
    newState = doTickly(newState)
    if (newState.ticksToday === 100) {
        newState.days = newState.days + 1
        newState.ticksToday = 0
        newState = doDaily(newState)
    }
    return newState
}

function doTickly(s) {
    return s
}

function doDaily(s) {
    let ss = eatFood(s)
    return ss
}

function eatFood(s) {
    let cash = s.cash
    let currentPlace = stateUtils.getCurrentPlace(s)
    let isFoodForSale = currentPlace.isFoodForSale
    let foodPrice = isFoodForSale ? currentPlace.foodPrice : -1
    if (!s.myShipId) {
        if (isFoodForSale && (cash >= foodPrice)) {
            floatNote('Buying food.')
            return {...s, cash: cash - foodPrice}
        } else {
            return {...s, cash: cash - foodPrice, gameOver: true}
        }
    } else {
        let myShip = stateUtils.getMyShip(s)
        let crew = myShip.crew

        //Loop once for each person in the crew. Try to get a food each time.
        for (let crewPerson = 1; crewPerson <= crew; crewPerson++) {
            if (myShip.food >= 1) {
                myShip.food = myShip.food - 1
                s = stateUtils.replaceShip(myShip, s)
            } else {
                if (isFoodForSale && (cash >= foodPrice)) {
                    s = {...s, cash: cash - foodPrice}
                } else {
                    if (myShip.crew > 1) {
                        myShip.crew = myShip.crew - 1
                        floatNote("Crew member starved.")
                        s = stateUtils.replaceShip(myShip)
                    } else {
                        floatNote("You starve.")
                        s = {...s, gameOver: true, gameOverMessage: 'You starved.'}
                    }
                }
            }
        }
        return s
    }
}

function floatNote(text) {
    console.log('FloatNote: ' + text)
}