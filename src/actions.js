//Redux action creators

export function tick() {
	return {type: 'TICK'}
}

export function showWelcomePage(showing) {
	return {type: 'SHOW_WELCOME_PAGE', showing: showing}
}

export function buyShip(shipId) {
	return {type: 'BUY_SHIP', shipId: shipId}
}

export function buyCargo(cargoId) {
	return {type: 'BUY_CARGO', cargoId: cargoId}
}

export function buyFood() {
	return {type: 'BUY_FOOD'}
}

//Also moves the player, if it's their ship.
export function moveShip(shipId, placeId) {
	return {type: 'MOVE_SHIP', shipId:shipId, placeId: placeId}
}

export function sellCargo(cargoId) {
	return {type: 'SELL_CARGO', cargoId: cargoId}
}
