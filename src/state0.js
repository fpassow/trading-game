
//First we create some objects describing mutable state about the world in general
//These object will then be added to the final state0 object.

const placeData = [
    {
        placeId: 'portharbor',
        shipsForSale: ['ship1', 'ship2'],
        cargosForSale: [
            {cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50},
            {cargoId:'cargo2', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50},
            {cargoId:'cargo3', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50}
        ]
    }
]

const ships = [
    {shipId: 'ship1', shipType: 'fishboat', shipName: 'The Flying Flea', crew: 1, fuel: 0, food: 0, cargo: []},
    {shipId: 'ship2', shipType: 'fishboat', shipName: 'Fishy 1', crew: 1, fuel: 0, food: 0, cargo: []}
]

const state0 = {
    showingWelcomePage: true,
    cash: 800,
    currentPlaceId: 'portharbor',
    placeData: placeData,
    ships: ships,
    myShipId: null,
    
}

export default state0