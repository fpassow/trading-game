import React from 'react'

const PlayingTheGame = () => (
    <div>
        <h2>Playing the Game</h2>

        <p>You start with some money, measured in Florins. Ships are for sale in the upper left. 
            Click to buy one. Any ship you can afford will have a &quot;Buy&quot; button based
            on your cash plus the value of your current ship.</p>

        <p>Next, buy some cargo. You will learn the prices at each port as you play. But for now, there's no point in exploring
            with an empty hold. Cargos for sale are shown at the bottom of the left hand panel. Any 
            cargo you can buy will have the local price displayed on its icon. Click to buy it and
            it will automatically move to fill an empty space in your ship&apos; hold.
        </p>

        <p>Your ship is shown in the center column on a large screen, or scroll down to the center
            of three sections on mobile.
        </p>

        <p>Be sure to buy rations for you and your crew. The game automatically buys rations for you when you are in port.
            But if you set sail without food, you will starve before you reach the next port. Every crewmember uses one
            unit of rations per day. You can click the single barrel symbol to buy one unit at a time. Or click
            the group to fill your ship&apos;s capacity with a single click.
        </p>

        <p>When you get a ship that needs fuel, you will find that fuel works just like rations.</p>

        <p>The right-most panel, or the bottom on mobile, show the map of the world.
            When you are ready to set sail, click an arrow to move to an adjacent square.
            Your ship will bob over the waves for a time which depends on its speed. Then it
            will arrive in the new square and you will see a new set of arrows showing the
            squares you can move to.
        </p>

        <p>When you reach another port, your cargos will display the local price which you
            can sell them for. Click a cargo to sell it</p>

        <p>Buy bigger and faster ships when you can. A ship will display a buy button when you become
            rich enough buy it.
            Note that the value of your current ship counts as a trade-in.
            </p>
        
        <p>And when you amass a fortune of fifty thousand florins, you win!</p>
   
    </div>
)

export default PlayingTheGame