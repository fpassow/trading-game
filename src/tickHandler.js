export default function tickHandler(state) {
    //A day is 100 ticks.
    //state contains ticks, days, and ticksToday for other logic to use.
    //ticksToday rolls back to zero at the end of each day, like a clock. While ticks just
    //  keeps rising.
    let newState = {...state, ticks: state.ticks + 1, ticksToday: state.ticksToday + 1}
    if (newState.ticksToday === 100) {
        newState.days = newState.days + 1
        newState.ticksToday = 0
    }
    

    return newState
}
