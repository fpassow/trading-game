//Unique id generator
let ___nextId = 111
export function nextId() {
    return ___nextId++
}

//So unit tests can have predictable IDs.
export function resetNextId() {
    ___nextId = 111
}

const baseCargo = {isForSale: true, isLoaded: false, shipId: null}
const labelForCargoType = {
    oliveoil: 'Olive oil',
    coal: 'Coal',
    leopardwood:'Leopard Wood',
    clockworks:'Clockworks',
    kippers:'Kippers',
    fluf:'Fluff'
}
export function cargoFactory(cargoType, placeId) {
    return {...baseCargo, 
            cargoLabel: labelForCargoType[cargoType], 
            cargoId: 'cargo_' + cargoType + '_' + nextId(),
            placeId: placeId,
            cargoType: cargoType
    }
}

export function shipyard(placeId, shipType, shipName) {
    let newShip = {
        shipId: 'ship_' + shipType + '_' + nextId(),
        placeId: placeId, 
        shipType: shipType, 
        shipName: shipName,
        food:0, 
        cargo: [], 
        fuel: 0,
        isForSale: true,
        isFlyer: false
    }
    switch (shipType) {
        case 'fishboat':
            newShip.shipTypeName = 'Fish Boat'
            newShip.basePrice = 500
            newShip.crewSize = 1
            newShip.maxFuel = 0
            newShip.speed = 1
            newShip.fuelPerMove = 0
            newShip.maxCargo = 4
            newShip.maxFood = 8
            break
        case 'albionsteamclipper':
            newShip.shipTypeName = 'Albion Steam Clipper'
            newShip.basePrice = 12000
            newShip.crewSize = 4
            newShip.maxFuel = 5
            newShip.speed = 3
            newShip.fuelPerMove = 1
            newShip.maxCargo = 12
            newShip.maxFood = 20
            break
        case 'enginebarge':
            newShip.shipTypeName = 'Engine Barge'
            newShip.basePrice = 4000
            newShip.crewSize = 2
            newShip.maxFuel = 20
            newShip.speed = 1
            newShip.fuelPerMove = 1
            newShip.maxCargo = 20
            newShip.maxFood = 60
            break
        case 'silverzeplin':
            newShip.shipTypeName = 'Silver Zeplin'
            newShip.basePrice = 20000
            newShip.crewSize = 2
            newShip.maxFuel = 10
            newShip.speed = 2
            newShip.fuelPerMove = 2
            newShip.maxCargo = 6
            newShip.maxFood = 16
            newShip.isFlyer = true
            break
        case 'steamturbinehovercraft':
            newShip.shipTypeName = 'Steam Turbine Hovercraft'
            newShip.basePrice = 5000
            newShip.crewSize = 2
            newShip.maxFuel = 12
            newShip.speed = 3
            newShip.fuelPerMove = 3
            newShip.maxCargo = 4
            newShip.maxFood = 10
            newShip.isFlyer = true
            break
        default:
            alert('Unknown ship type "'+shipType+'"')
    }
    return newShip
}
