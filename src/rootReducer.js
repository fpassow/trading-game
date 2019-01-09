import state0 from './state0'

function rootReducer(state = state0, action) {
    switch (action.type) {
  	    case 'SELECT_TAB1':
  	        let stuff1 = {...state.tabbedStuff1, selectedTab:action.tabId}
            return {...state, tabbedStuff1: stuff1}
        case 'SELECT_TAB2':
  	        let stuff2 = {...state.tabbedStuff2, selectedTab:action.tabId}
            return {...state, tabbedStuff2: stuff2}
        default:
            return state;
    }
}

export default rootReducer
