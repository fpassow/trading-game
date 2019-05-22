import { shipyard } from './factories'
import places from './state0_places'

const state0 = {
    showingWelcomePage: true,
    timeStop: true,
    slowTimeCounter: 0,
    gameOver: false,
    gameOverMessage: '',
    ticks: 0,
    days: 0,
    ticksToday: 0,
    isMoving: false,
    moveEndTime: null,
    cash: 80000,
    currentPlaceId: 'portharbor',
    defaultPlaceId: 'portharbor',
    myShipId: null,
    ships: [
        shipyard('portharbor', 'fishboat', 'Fishy'),
        shipyard('portharbor', 'albionsteamclipper', 'Clippy'),
        shipyard('heck', 'enginebarge', 'Grummpy'),
        shipyard('pointa', 'silverzeplin', 'Puffy'),
        shipyard('gibber', 'steamturbinehovercraft', 'Zippy'),
    ],
    places: places,
    cargos: [
        {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo2', cargoLabel: 'Kippers', cargoType: 'kippers', isLoaded: false, placeId: 'portharbor', shipId: null}
    ],
    cargoProducers: [
        {placeId: 'portharbor', period: 3, cargoType: 'oliveoil', quantity: 1},
        {placeId: 'gibber', period: 3, cargoType: 'fluff', quantity: 1},
        {placeId: 'heck', period: 3, cargoType: 'coal', quantity: 1},
        {placeId: 'portharbor', period: 3, cargoType: 'kippers', quantity: 1},
        {placeId: 'pointa', period: 3, cargoType: 'clockworks', quantity: 1},
        {placeId: 'thirdplace', period: 3, cargoType: 'leopardwood', quantity: 1},
    ]
}

export default state0