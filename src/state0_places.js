//Used in state0.js

const places = [
    {
        name: 'Ocean', placeId: 'wet_1_1', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 1,
        neighbors: ['wet_1_2', 'wet_2_1']
    },
    {
        name: 'Ocean', placeId: 'wet_1_2', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 2,
        neighbors: ['wet_1_1', 'wet_2_2', 'wet_1_3']
    },
    {
        name: 'Ocean', placeId: 'wet_1_3', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 3,
        neighbors: ['otherplace', 'wet_1_2', 'wet_1_4']
    },
    {
        name: 'Ocean', placeId: 'wet_1_4', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 4,
        neighbors: ['wet_1_5', 'wet_1_3']
    },
    {
        name: 'Ocean', placeId: 'wet_1_5', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 5,
        neighbors: ['portharbor', 'wet_1_4', 'wet_1_6']
    },
    {
        name: 'Ocean', placeId: 'wet_1_6', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 1,
        y: 6,
        neighbors: ['wet_2_6', 'wet_1_5']
    },
    {
        name: 'Ocean', placeId: 'wet_2_1', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 1,
        neighbors: ['wet_1_1']
    },
    {
        name: 'Ocean', placeId: 'dry_2_2', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 2,
        neighbors: ['wet_1_2', 'wet_2_1']
    },
    {
        name: 'Other Place',
        placeId: 'otherplace',
        placeType: 'PORT',
        description: 'A nasty little fishing village',
        isFoodForSale: true,
        foodPrice: 5,
        x: 2,
        y: 3,
        neighbors: ['wet_1_3']
    },
    {
        name: 'Land', placeId: 'dry_2_4', placeType: 'LAND', description: 'Land', isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 4,
        neighbors: []
    },
    {
        name: 'Port Harbor',
        placeId: 'portharbor',
        placeType: 'PORT',
        description: 'A nice little fishing village',
        isFoodForSale: true,
        foodPrice: 5,
        x: 2,
        y: 5,
        neighbors: ['wet_1_5', 'wet_2_6']
    },
    {
        name: 'Ocean', placeId: 'wet_2_6', placeType: 'AT_SEA', description: 'At sea', isFoodForSale: false, foodPrice: -1,
        x: 2,
        y: 6,
        neighbors: ['wet_2_5', 'wet_1_6']
    }
    
    
    
]

export default places
