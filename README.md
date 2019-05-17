# trading-game
A steampunk merchants game. I wanted something with some state to manage with Redux and display with React.

DEVELOPERS' OVERVIEW...

TIME IN THE GAME
A JavaScript setInterval(func, mS) call in index.js sends TICK actions into Redux.

The reducer calls code in tickHandler.js to do all the state changes that just happen by themselves
with the passage of time.

Tick handling logic "stops time" when the user has returned to the welcome page. 
And time runs faster when the players ship is at sea, vs runnning slower while in port
buying and selling.

PROJECT STRUCTURE
public -- Served by web server
src    -- ES6/JSX source code
    App.js             -- React stuff starts here
    state0.js          -- Initial state for Redux. Place to understand overall state.
    state0_places.js   -- Initial state for every square on the map
    stateUtils.js      -- Functions for finding and changing state. Used in reducers and mapStateToProps
    actions.js         -- All of the Redux action creators
    rootReducer.js     -- Redux reducer function
    place              -- Directory containing componets for the port the player is currently at,
                          where you buy and sell cargo, etc. It's just blue water while sailing between
                          ports.
    ship               -- Directory containing components show the player's ship, the contents
                          of it's hold, food supply, etc. The players "cash box" also displays here.
    welcome            -- Components for the initial welcome screen, with rules and info.


    