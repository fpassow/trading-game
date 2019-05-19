//Used in state0.js

//Every place has a prices object. If place.prices[cargoType] isn't defined, there's no market for 
//  that cargoType at that place. If it is defined, the prices is both the buying and selling price

const  basePrices = {
    oliveoil: 50,
    smallbagofgold: 290,
    coal: 10,
    leopardwood: 100,
    clockworks: 200,
    kippers: 50,
    fluff: 20
}

const places = [
    {
        name: 'Ocean', placeId: 'wet_1_1', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 1,
        neighbors: ['wet_1_2', 'wet_2_1'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_2', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 2,
        neighbors: ['wet_1_1', 'wet_2_2', 'wet_1_3'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_3', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 3,
        neighbors: ['otherplace', 'wet_1_2', 'wet_1_4'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_4', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 4,
        neighbors: ['wet_1_5', 'wet_1_3'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_5', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 5,
        neighbors: ['portharbor', 'wet_1_4', 'wet_1_6'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_6', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 6,
        neighbors: ['wet_2_6', 'wet_1_5'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_7', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 7,
        neighbors: ['nether', 'wet_1_6', 'wet_1_8'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_8', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 1,
        y: 8,
        neighbors: ['wet_1_7', 'wet_2_8'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_2_1', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 2,
        y: 1,
        neighbors: ['wet_1_1'],
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'dry_2_2', placeType: 'LAND', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 2,
        y: 2,
        neighbors: ['wet_1_2', 'wet_2_1'],
        prices: {}
    },
    {
        name: 'Other Place',
        placeId: 'otherplace',
        placeType: 'PORT',
        description: 'A nasty little fishing village',
        isFoodForSale: true,
        foodPrice: 5,
        foods: 1,
        x: 2,
        y: 3,
        neighbors: ['wet_1_3'],
        prices: {...basePrices, oliveoil: 100}
    },
    {
        name: 'Land', placeId: 'dry_2_4', placeType: 'LAND', description: 'Land', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 2,
        y: 4,
        neighbors: [],
        prices: {}
    },
    {
        name: 'Port Harbor',
        placeId: 'portharbor',
        placeType: 'PORT',
        description: 'A nice little fishing village',
        isFoodForSale: true,
        foodPrice: 5,
        foods: 1,
        x: 2,
        y: 5,
        neighbors: ['wet_1_5', 'wet_2_6'],
        prices: basePrices
    },
    {
        name: 'Ocean', placeId: 'wet_2_6', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        foods: 0,
        x: 2,
        y: 6,
        neighbors: ['wet_2_5', 'wet_1_6'],
        prices: {}
    }
]

export default places
