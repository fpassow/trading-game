//Used in state0.js

//Every place has a prices object. If place.prices[cargoType] isn't defined, there's no market for 
//  that cargoType at that place. If it is defined, the prices is both the buying and selling price

export const basePrices = {
    oliveoil: 100,
    coal: 50,
    leopardwood: 200,
    clockworks: 300,
    kippers: 100,
    fluff: 10
}

const places = [
    {
        name: 'Ocean', placeId: 'wet_1_1', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1, isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 1,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_2', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 2,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_3', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 3,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_4', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 4,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_5', placeType: 'AT_SEA', description: 'At sea',  isFuelForSale: false, fuelPrice:-1, isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 5,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_6', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 6,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_7', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 7,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_1_8', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 8,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_2_1', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 1,
        prices: {}
    },
    {
        name: 'Point A', placeId: 'pointa', placeType: 'PORT', description: 'Not far frmo Point B', isFuelForSale: true, fuelPrice:10,  isFoodForSale: true, foodPrice: 5,
        x: 2,
        y: 2,
        prices: {...basePrices, fluff:70, clockworks:100}
    },
    {
        name: 'Third Place',
        placeId: 'thirdplace',
        placeType: 'PORT',
        description: 'Not home or work',
        isFuelForSale: true, fuelPrice:10, 
        isFoodForSale: true,
        foodPrice: 15,
        x: 2,
        y: 3,
        prices: {...basePrices, fluff:70, leopardwood:30}
    },
    {
        name: 'Land', placeId: 'dry_2_4', placeType: 'LAND', description: 'Land', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 4,
        prices: {}
    },
    {
        name: 'Port Harbor',
        placeId: 'portharbor',
        placeType: 'PORT',
        description: 'A nice little fishing village',
        isFuelForSale: true, fuelPrice:10, 
        isFoodForSale: true,
        foodPrice: 5,
        x: 2,
        y: 5,
        prices: {...basePrices, kippers: 5, oliveoil:10}
    },
    {
        name: 'Land', placeId: 'dry_2_6', placeType: 'LAND', description: 'Land', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 6,
        prices: {}
    },
    {
        name: 'Nether',
        placeId: 'nether',
        placeType: 'PORT',
        description: 'A southern region',
        isFuelForSale: true, fuelPrice:10, 
        isFoodForSale: true,
        foodPrice: 10,
        x: 2,
        y: 7,
        prices: {...basePrices, coal:10}
    },
    {
        name: 'Ocean', placeId: 'wet_2_8', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 8,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_3_1', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 3,
        y: 1,
        prices: {}
    },
    {
        name: 'Point B', placeId: 'pointb', placeType: 'PORT', description: 'Not far frmo Point A', isFuelForSale: true, fuelPrice:10,  isFoodForSale: true, foodPrice: 5,
        x: 3,
        y: 2,
        prices: {...basePrices, fluff:70}
    },
    {
        name: 'Land', placeId: 'dry_3_3', placeType: 'LAND', description: 'Land', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 3,
        y: 3,
        prices: {}
    },
    {
        name: 'Land', placeId: 'dry_3_4', placeType: 'LAND', description: 'Land', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 3,
        y: 4,
        prices: {}
    },
    {
        name: 'Heck', placeId: 'heck', placeType: 'PORT', description: 'It\'s all going to here.', isFuelForSale: true, fuelPrice:10,  isFoodForSale: true, foodPrice: 5,
        x: 3,
        y: 5,
        prices: {...basePrices, coal:10}
    },
    {
        name: 'Land', placeId: 'dry_3_6', placeType: 'LAND', description: 'Land', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 3,
        y: 6,
        prices: {}
    },
    {
        name: 'Gibber', placeId: 'gibber', placeType: 'PORT', description: 'Home of a popular language.', isFuelForSale: true, fuelPrice:10,  isFoodForSale: true, foodPrice: 5,
        x: 3,
        y: 7,
        prices: {...basePrices, fluff:2}
    },
    {
        name: 'Ocean', placeId: 'wet_3_8', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 3,
        y: 8,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_1', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 1,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_2', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 2,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_3', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 3,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_4', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 4,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_5', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 5,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 6,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_7', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 7,
        prices: {}
    },
    {
        name: 'Ocean', placeId: 'wet_4_8', placeType: 'AT_SEA', description: 'At sea', isFuelForSale: false, fuelPrice:-1,  isFoodForSale: false, foodPrice: -1,
        x: 4,
        y: 8,
        prices: {}
    }
]

export default places
