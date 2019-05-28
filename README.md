trading-game
============
A steampunk merchants game. I wanted something with lots of state to manage with Redux and display with React.

RUNNING
-------

The build process is currently set up to generate code that expects to live at <web_server_root>/trading-game/

```
npm run-script build
cd build
mkdir <web_server_root>/trading-game
cp -r * <web_server_root>/trading-game
```

To install at the web root (which is easier for just playing around), remove
the "homepage" element from project.json and rebuild. You can then point a dev server's webroot at the build directory.

DEVELOPERS' OVERVIEW
--------------------

This project was started with create-react-app. It uses React and Redux.

It's purely client-side JavaScript. 

### TIME IN THE GAEM

A JavaScript setInterval(func, mS) call in index.js sends TICK actions into Redux.

The reducer calls code in tickHandler.js to do all the state changes that just happen by themselves
with the passage of time.

Tick handling logic "stops time" when the user has returned to the welcome page. 
And time runs faster when the players ship is at sea, vs runnning slower while in port
thinking about buying and selling.

Ticks also control ship movement. The player clicks to select a new location and set state.isMoving=true.
But the end of the isMoving=true period is controlled by the flow of ticks and the ship's speed.

PROJECT STRUCTURE
```
public -- Served by web server
src    -- ES6/JSX source code
    App.js             -- React stuff starts here
    state0.js          -- Initial state for Redux. The place to understand
                            overall state.
    state0_places.js   -- Initial state for every square on the map
    stateUtils.js      -- Functions for finding and changing state. Used in
                            reducers and mapStateToProps
    actions.js         -- All of the Redux action creators
    rootReducer.js     -- Redux reducer function
    factories.js       -- Contains functions for creating ship and 
                            cargo objects
    place              -- Directory containing componets for the port the
                            player is currently at, where you buy and sell
                            cargo, etc. It just shows blue water while you
                            are at sea.
    ship               -- Directory containing components show the player's
                            ship, the contents of it's hold, food supply,
                            etc. The players "cash box" also displays here.
    welcome            -- Components for the initial welcome screen, with 
                            rules and info. 
    map.js             -- Compoent that creates the game map, based on
                            element in state.places.
```

    