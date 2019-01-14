import state0 from './state0'

function rootReducer(state = state0, action) {
    switch (action.type) {
  	    case 'SHOW_WELCOME_PAGE':
  	        return {...state, showingWelcomePage: action.showing}
        default:
            return state;
    }
}

export default rootReducer
