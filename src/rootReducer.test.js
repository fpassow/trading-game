import rootReducer from './rootReducer'
import state00 from './state0'

function state0() {
    return JSON.parse(JSON.stringify(state00))
}

console.log("state0="+JSON.stringify(state0()))

test('Nonexistent action type', () => {
    let s0 = state0()
    let bogusAction = {type:'BOGOBOGOBOGUSSS'}
    let state0Str = JSON.stringify(s0)
    let state1Str = JSON.stringify(rootReducer(s0, bogusAction))
    expect(state1Str).toBe(state0Str);
});

