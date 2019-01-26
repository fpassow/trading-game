/* This is data about the game world that doesn't change
 * like places on the map, kinds of ships, etc.
 */

const staticState = {
    places: [
        {
            name: 'Morlock',
            placeId: 'morlock',
            placeType: 'PORT',
            description: 'Shrouded in hissing steam and sulphurous smogg',
            x: 1,
            y: 1
        },
        {
            name: 'Eloi',
            placeId: 'eloi',
            placeType: 'PORT',
            description: 'See the pretty little flowers.',
            x: 3,
            y: 3
        },
        {
            name: 'Port Harbor',
            placeId: 'portharbor',
            placeType: 'PORT',
            description: 'A nice little fishing village',
            x: 2,
            y: 5
        }
    ],
    defaultPlaceId: 'portharbor',

    shipInfoByType: {
        fishboat: {shipType: 'fishboat', shipTypeName: 'fishboat', basePrice: 500, crewSize:1, maxFuel: 0, maxFood: 8, speed: 1, fuelPerMove: 0},
        longboat: {shipType: 'longboat', shipTypeName: 'longboat', basePrice: 700, crewSize:12, maxFuel: 0, maxFood: 36, speed: 3, fuelPerMove: 0}
    }
}

export default staticState