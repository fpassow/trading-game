
import state00 from './state0'
import * as su from './stateUtils'
import { nextId, resetNextId } from './factories'

//Get a new state object, and reset the unique id generator.
//Used at the start of each test.
function state0() {
    return JSON.parse(JSON.stringify(state00))
    resetNextId()
}


test('getCurrentPlace for portharbor', () => {
    let s0 = state0()
    let ph = su.getCurrentPlace(s0)
    expect(ph.name).toBe('Port Harbor');
});

test('getShipById', () => {
    let s0 = state0()
    expect(su.getShipById('ship_fishboat_111', s0).shipName).toBe('The Flying Flea');
});

test('getMyShip', () => {
    let s0 = state0()
    s0.myShipId = 'ship_fishboat_111'
    expect(su.getMyShip(s0).shipName).toBe('The Flying Flea');
});

test('getPlaceById', () => {
    let s0 = state0()
    expect(su.getPlaceById('portharbor', s0).name).toBe('Port Harbor');
});

test('getCurrentPlace', () => {
    let s0 = state0()
    expect(su.getCurrentPlace(s0).name).toBe('Port Harbor');
});

test('getShipsForSale', () => {
    let s0 = state0()
    let sfs = su.getShipsForSale('portharbor', s0)
    expect(sfs.length).toEqual(2);
});

test('replaceShip', () => {
    let s0 = state0()
    s0.myShipId = 'ship_fishboat_111'
    let updated = JSON.parse(JSON.stringify(su.getMyShip(s0)))
    updated.shipName = "The Decade Duck"
    let s1 = su.replaceShip(updated, s0)
    expect(su.getMyShip(s1).shipName).toBe("The Decade Duck");
});

test('getCargoById', () => {
    let s0 = state0()
    expect(su.getCargoById('cargo1', s0).cargoLabel).toBe('Olive Oil');
});

test('getCargoById bogus id', () => {
    let s0 = state0()
    expect(su.getCargoById('bogoMcBogotron', s0)).toBeNull();
});

test('getCargoById bogus id', () => {
    let s0 = state0()
    expect(su.getCargoById('bogoMcBogotron', s0)).toBeNull();
});

test('getCargoInPort', () => {
    let s0 = state0()
    let cip = su.getCargoInPort('portharbor', s0)
    expect(cip.length).toBe(5)
    expect(cip[0].cargoType).toBe('oliveoil')
});

test('getCargoOnBoard', () => {
    let s0 = state0()
    expect(su.getCargoOnBoard('ship_fishboat_111', s0)).toEqual([])
});

test('replaceCargo', () => {
    let s0 = state0()
    let updated = su.getCargoById('cargo1', s0)
    updated.isLoaded = true
    updated.placeId = null
    updated.shipId = 'ship_fishboat_111'
    let s1 = su.replaceCargo(updated, s0)
    expect(su.getCargoOnBoard('ship_fishboat_111', s1).length).toBe(1)
});


