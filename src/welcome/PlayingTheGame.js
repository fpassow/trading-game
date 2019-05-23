import React from 'react'

const PlayingTheGame = () => (
    <div>
        <h2>Playing the Game</h2>

        <p>You start with some money, measured in Florins. Ships are for sale in the upper left. Click to buy one.</p>

        <p>Next, buy some cargo. You will learn the prices at each port as you play. But for now, there's no point in exploring
            with an empty hold.
        </p>

        <p>Be sure to buy rations for you and your crew. The game automatically buys rations for you when you are in port.
            But if you set sail without food, you will starve before you reach the next port. Every crewmember uses one
            unit of rations per day.
        </p>

        <p>About time... A clock in the upper right shows days and hours. Note that time runs slower in port.
            So you have time to think about buying and selling cargo. And time runs faster when you are at sea, because it&apos;s kind
            of boring otherwise.
        </p>

        <p>When you are ready to set sail, click an arrow to move to an adjacent square.</p>

        <p>When you reach another port, you can click your cargos to sell at the local price.</p>

        <p>Buy bigger and faster ships when you can. A ship will have a buy button when you can buy it.
            Note that the value of your current ship counts as a trade-in.</p>
            
        <p>Also, if you overspend somehow, you can trade down to a cheaper ship and free up some cash.</p>
        
        <p>And when you amass a fortune of fifty thousand florins, you win!</p>
   
    </div>
)

export default PlayingTheGame