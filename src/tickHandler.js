export default function tickHandler(state) {
    //Ticks arrive one-per-second
    //A day is 100 ticks
    //At sea, time will run faster
    let newState = {...state, ticks: state.ticks + 1, ticksToday: state.ticksToday + 1}
    if (newState.ticksToday === 100) {
        newState.days = newState.days + 1
        newState.ticksToday = 0
    }
    

    return newState
}
