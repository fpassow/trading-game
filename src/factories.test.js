import { nextId, resetNextId, shipyard } from './factories'

test('nextId', () => {
    expect(nextId()).toBe(111);
    expect(nextId()).toBe(112);
    resetNextId()
    expect(nextId()).toBe(111);
});

//shipyard(placeId, shipType, shipName)
test('shipyard', () => {
    let ship = shipyard('portharbor', 'fishboat', 'Testy McTestcase')
    expect(ship.shipId).not.toBeNull()
    expect(ship.shipName).toBe('Testy McTestcase')
    expect(ship.isForSale).toBe(true)
});