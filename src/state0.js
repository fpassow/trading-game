
//First we create some objects describing mutable state about the world in general
//These object will then be added to the final state0 object.

const placeData = [
    {
        placeId: 'portharbor',
        shipsForSale: ['ship1', 'ship2']
    }
]

const ships = [
    {shipId: 'ship1', shipType: 'fishboat', shipName: 'The Flying Flea'},
    {shipId: 'ship2', shipType: 'fishboat', shipName: 'Fishy 1'}
]

const state0 = {
    showingWelcomePage: true,
    cash: 500,
    currentPlaceId: 'portharbor',
    placeData: placeData,
    ships: ships,
    myShipId: null
}

export default state0