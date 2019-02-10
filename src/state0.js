import { shipyard } from './factories'
import places from './state0_places'

const state0 = {
    showingWelcomePage: true,
    gameOver: false,
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
        {isForSale: true, cargoId:'cargo1', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50, isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo2', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50, isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo3', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50, isLoaded: false, placeId: 'portharbor', shipId: null},
        {isForSale: true, cargoId:'cargo4', cargoLabel: 'Olive Oil', cargoType: 'oliveoil', cargoPrice: 50, isLoaded: false, placeId: 'portharbor', shipId: null}
    ]
}

export default state0