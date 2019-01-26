import rootReducer from './rootReducer'
import state00 from './state0'
import * as actions from './actions'
import * as stateUtils from './stateUtils'

console.log('STATE0=' + JSON.stringify(state00))

//Util to create a new state0 object, not === to any other.
function state0() {
    return JSON.parse(JSON.stringify(state00))
}

test('Nonexistent action type', () => {
    let s0 = state0()
    let bogusAction = {type:'BOGOBOGOBOGUSSS'}
    let state0Str = JSON.stringify(s0)
    let state1Str = JSON.stringify(rootReducer(s0, bogusAction))
    expect(state1Str).toBe(state0Str);
});

test('showWelcomePage off and on', () => {
    let s0 = state0()
    let offAction = actions.showWelcomePage(false)//{type:'SHOW_WELCOME_PAGE', showing: false}
    let onAction = actions.showWelcomePage(true)//{type:'SHOW_WELCOME_PAGE', showing: true}
    let state0Str = JSON.stringify(s0)
    let s1 = rootReducer(s0, offAction)
    expect(s1.showingWelcomePage).toBe(false)
    let s2 = rootReducer(s1, onAction)
    expect(s2.showingWelcomePage).toBe(true)
});

test('Buy a ship', () => {
    let s0 = state0()
    expect(actions.buyShip('testid')).toEqual({type: 'BUY_SHIP', shipId: 'testid'})
    let s1 = rootReducer(s0, actions.buyShip('ship1'))
    expect(s1.myShipId).toBe('ship1')
    expect(s1.cash).toBe(300)
    expect(stateUtils.getMyShip(s1).shipId).toBe('ship1')
    expect(stateUtils.getDynamicPlaceById('portharbor', s1).shipsForSale.indexOf('ship1')).toBe(-1)
});

