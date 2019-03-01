//By convention, "get..." functions all return new obejcts, not references to existing state.
//           And "replace..." functions expect new objects, not references to existing state.


export function getShipById(shipId, state) {
    for (let i = 0; i < state.ships.length; i++) {
        if (state.ships[i].shipId === shipId) {
            return {...state.ships[i]}
        }
    }
    return null
}

export function getMyShip(state) {
    return state.myShipId && getShipById(state.myShipId, state)
}

export function getPlaceById(id, state) {
    for (let i = 0; i < state.places.length; i++) {
        if (state.places[i].placeId === id) {
            return {...state.places[i]}
        }
    }
    return null
}

export function getCurrentPlace(state) {
    return getPlaceById(state.currentPlaceId, state)
}

export function getShipsForSale(placeId, state) {
    return state.ships.filter((ship)=>(ship.placeId === placeId && ship.isForSale))
}

export function getShipsForSaleHere(state) {
    return getShipsForSale(state.currentPlaceId, state)
}

export function replaceShip(ship, state) {
    let newShips = state.ships.map((s)=>( (s.shipId === ship.shipId) ? ship : s) )
    return { ...state, ships: newShips}
}

export function getCargoById(id, state) {
    for (let i = 0; i < state.cargos.length; i++) {
        if (state.cargos[i].cargoId === id) {
            return {...state.cargos[i]}
        }
    }
    return null
}

export function getCargoInPort(placeId, state) {
    return state.cargos.filter((cargo)=>(!cargo.isLoaded && cargo.placeId === placeId))
}

export function getCargoForSaleHere(state) {
    return getCargoInPort(state.currentPlaceId, state)
}

export function getCargoOnBoard(shipId, state) {
    return state.cargos.filter((cargo)=>(cargo.isLoaded && cargo.shipId === shipId))
}

export function replaceCargo(cargo, state) {
    let newCargos = state.cargos.map((c)=>( (c.cargoId === cargo.cargoId) ? cargo : c) )
    return { ...state, cargos: newCargos}
}

export function removeCargo(cargo, state) {
    let newCargos = state.cargos.filter((c)=>(c.cargoId !== cargo.cargoId))
    return { ...state, cargos: newCargos}
}

