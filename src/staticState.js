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

    getPlaceById(id) {
        for (let i = 0; i < this.places.length; i++) {
            if (this.places[i].placeId === id) {
                return this.places[i]
            }
        }
        return null
    }

}

export default staticState