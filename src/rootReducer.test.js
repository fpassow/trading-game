import rootReducer from './rootReducer'
import state0 from './state0'

test('Nonexistent action type', () => {
    let state0Str = JSON.stringify(state0)
    let bogusAction = {type:'BOGOBOGOBOGUSSS'}
    let state1Str = JSON.stringify(rootReducer(state0, bogusAction))
    expect(rootReducer(state1Str, bogusAction)).toBe(state0Str);
});

