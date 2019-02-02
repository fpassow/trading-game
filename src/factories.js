//Unique id generator
let ___nextId = 111
export function nextId() {
    return ___nextId++
}

//So unit tests can have predictable IDs.
export function resetNextId() {
    ___nextId = 111
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
        crew: 0,
        isForSale: true
    }
    switch (shipType) {
        case 'fishboat':
            newShip.shipTypeName = 'fishboat'
            newShip.basePrice = 500
            newShip.crewSize = 1
            newShip.maxFuel = 0
            newShip.speed = 1
            newShip.fueldPerMove = 0
            newShip.maxCargo = 4
            break
        case 'longboat':
            newShip.shipTypeName = 'longboat'
            newShip.basePrice = 800
            newShip.crewSize = 12
            newShip.maxFuel = 0
            newShip.speed = 3
            newShip.fueldPerMove = 0
            newShip.maxCargo = 8
            break
    }
    return newShip
}
