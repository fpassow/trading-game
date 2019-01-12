const staticState = {
    ports: [
        {
            name: 'Morlock',
            portId: 'morlock',
            x: 1,
            y: 1
        {
            name: 'Eloi',
            producerId: 'eloi',
            x: 3,
            y: 3
        }
    ],
    routes: [
        {
            routeId:'route1',
            routeLabel: 'The Hard Way',
            startPortId: 'morlock',
            endPortId: 'eloi',
            stages: [{x:1, y:1}, {x:2, y:2}, {x:3, y:3})],
            shipType: 'boat'
        }
    ],
    producers: [
        {
            producerId: 'morlock_iron_producer',
            ....
        }
    ]
}

export default staticState