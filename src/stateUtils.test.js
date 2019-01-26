
import state00 from './state0'
import { currentPlaceInfo } from './stateUtils'

function state0() {
    return JSON.parse(JSON.stringify(state00))
}

test('currentPlaceInfo for portharbor', () => {
    let s0 = state0()
    let ph = currentPlaceInfo(s0)
    expect(ph.name).toBe('Port Harbor');
    expect(ph.shipsForSale.length).toBe(2);
});
