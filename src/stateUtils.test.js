
import state00 from './state0'
import { currentPlaceInfo } from './stateUtils'

function state0() {
    return JSON.parse(JSON.stringify(state00))
}

const portHarborExpected = {
    name: 'Port Harbor',
    placeId: 'portharbor',
    placeType: 'PORT',
    description: 'A nice little fishing village',
    x: 2,
    y: 5,
    shipsForSale: [
        {shipId: 'ship1', shipType: 'fishboat', shipTypeName: 'fishboat', shipName: 'The Flying Flea', basePrice: 500},
        {shipId: 'ship2', shipType: 'fishboat', shipTypeName: 'fishboat', shipName: 'Fishy 1', basePrice: 500}
    ]
}
test('currentPlaceInfo for portharbor', () => {
    let s0 = state0()
    expect(currentPlaceInfo(s0)).toEqual(portHarborExpected);
});
