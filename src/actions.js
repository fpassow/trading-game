/*
 * Redux action creators.
 *
 * It's a convention of this project aht all Redux action object must be created by
 * an action creator function. And all action creator functions must be in this file.
 * 
 * I decided not to use a file of string constants for action names because those
 * strings are all only used in exactly two places, here and in rootReducer.js.
 * (And any typo is fail-fast.)
 */

export function tick() {
	return {type: 'TICK'}
}

export function showWelcomePage(showing) {
	return {type: 'SHOW_WELCOME_PAGE', showing: showing}
}

export function startNewGame() {
	return {type: 'START_NEW_GAME'}
}

export function selectPortTab() {
	return {type: 'SELECT_TAB', whichTab:'PORT'}
}
export function selectShipTab() {
	return {type: 'SELECT_TAB', whichTab:'SHIP'}
}
export function selectMapTab() {
	return {type: 'SELECT_TAB', whichTab:'MAP'}
}

export function buyShip(shipId) {
	return {type: 'BUY_SHIP', shipId: shipId}
}

export function buyCargo(cargoId) {
	return {type: 'BUY_CARGO', cargoId: cargoId}
}

export function buyFood(placeId, quantity) {
	return {type: 'BUY_FOOD', placeId: placeId, quantity: quantity}
}

export function buyFuel(placeId, quantity) {
	return {type: 'BUY_FUEL', placeId: placeId, quantity: quantity}
}

//Also moves the player, if it's their ship.
export function moveShip(shipId, placeId) {
	return {type: 'MOVE_SHIP', shipId:shipId, placeId: placeId}
}

export function sellCargo(cargoId) {
	return {type: 'SELL_CARGO', cargoId: cargoId}
}

export function resetState() {
	return {type: 'RESET_STATE'}
}