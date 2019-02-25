import { shipyard } from './factories'
import places from './state0_places'

const state0 = {
    showingWelcomePage: true,
    timeStop: true,
    gameOver: false,
    gameOverMessage: '',
    ticks: 0,
    days: 0,
    ticksToday: 0,
    cash: 800,
    currentPlaceId: 'portharbor',
    defaultPlaceId: 'portharbor',
    myShipId: null,
    ships: [
        shipyard('portharbor', 'fishboat', 'The Flying Flea'),
        shipyard('portharbor', 'fishboat', 'Fishy'),
    ],
    places: places,
    cargos: [
        {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo2', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo3', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo4', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo5', cargoLabel: 'small bag of gold', cargoType: 'smallbagofgold', isLoaded: false, placeId: 'portharbor', shipId: null}
    ],
    cargoProducers: [
        {placeId: 'portharbor', period: 2, cargoType: 'oliveoil', quantity: 1}
    ]
}

export default state0