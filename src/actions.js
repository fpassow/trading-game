//Redux action creators

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
