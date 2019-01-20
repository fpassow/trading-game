import staticState from './staticState'

/*Returns an object like:
    {
        name
        placeId
        placeType
        description
        x
        y
        shipsForSale: [
            {shipId, shipType, shipTypeName, shipName: 'Fishy 1'}
        ]
    }
*/
export function currentPlaceInfo(state) {
    let currentPlaceId = state.currentPlaceId || staticState.defaultPlaceId
    let staticPlace = _getStaticPlaceById(currentPlaceId)
    let dynamicPlace = _getDynamicPlaceById(currentPlaceId, state)
    let shipsWithTypeName = dynamicPlace.shipsForSale.map((shipId)=>{
        return getShipById(shipId, state)
    })
    return {...staticPlace, ...dynamicPlace, shipsForSale: shipsWithTypeName}
}

//Get info about a ship, combining dynamic and static info
//Returns {shipId, shipType, shipTypeName shipName}
export function getShipById(shipId, state) {
    for (let i = 0; i < state.ships.length; i++) {
        if (state.ships[i].shipId === shipId) {
            let ship = state.ships[i]
            return {...ship, ...staticState.shipInfoByType[ship.shipType]}
        }
    }
    return null
}

function _getStaticPlaceById(id) {
    for (let i = 0; i < staticState.places.length; i++) {
        if (staticState.places[i].placeId === id) {
            return staticState.places[i]
        }
    }
    return null
}

function _getDynamicPlaceById(id, state) {
    for (let i = 0; i < state.placeData.length; i++) {
        if (state.placeData[i].placeId === id) {
            return state.placeData[i]
        }
    }
    return null
}