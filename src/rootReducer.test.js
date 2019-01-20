import rootReducer from './rootReducer'
import state00 from './state0'

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
    let offAction = {type:'SHOW_WELCOME_PAGE', showing: false}
    let onAction = {type:'SHOW_WELCOME_PAGE', showing: true}
    let state0Str = JSON.stringify(s0)
    let s1 = rootReducer(s0, offAction)
    expect(s1.showingWelcomePage).toBe(false)
    let s2 = rootReducer(s1, onAction)
    expect(s2.showingWelcomePage).toBe(true)
});

