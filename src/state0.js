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
    cash: 800,
    currentPlaceId: 'portharbor',
    defaultPlaceId: 'portharbor',
    myShipId: null,
    ships: [
        shipyard('portharbor', 'fishboat', 'The Flying Flea'),
        shipyard('portharbor', 'fishboat', 'Fishy'),
        shipyard('portharbor', 'albionsteamclipper', 'Clippy'),
        shipyard('portharbor', 'enginebarge', 'Grummpy'),
        shipyard('portharbor', 'silverzeplin', 'Puffy'),
        shipyard('portharbor', 'steamturbinehovercraft', 'Zippy'),
    ],
    places: places,
    cargos: [
        {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo2', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null}
      //  {isForSale: true, cargoId:'cargo5', cargoLabel: 'small bag of gold', cargoType: 'smallbagofgold', isLoaded: false, placeId: 'portharbor', shipId: null}
    ],
    cargoProducers: [
        {placeId: 'portharbor', period: 3, cargoType: 'oliveoil', quantity: 1}
    ]
}

export default state0