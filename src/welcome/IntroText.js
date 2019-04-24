import React from 'react'

const IntroText = () => (
    <div >
        <p>This is a classic trading game. You start with some money. Buy a ship. Buy some cargo. Sail to another port. Sell
        the cargo at a profit. And repeat until rich</p>

        <p>Along the way, you can upgrade to bigger and faster ships so you can make money even faster.</p>

        <p>But you have to be quick. Your crew is eating your ships stores. When you are in port, that costs
            money. And if you just float around at sea, your stores can run out and you starve.
        </p>

        <h2>Playing the Game</h2>

        <p>You start with only some money, measured in Florins. Ships for sale are in the upper left. Click to buy one.</p>

        <p>Next, buy some cargo. You will learn the prices at each port as you play. But for now, there's no point in exploring
            with an empty hold.
        </p>

        <p>Your first ship is probably a sailboad which does not need any fueld. But note that you will have to buy fuel
            when you upgrade to something bigger or faster.
        </p>

        <p>Be sure to buy rations for you and your crew. The game automatically buys rations for you when you are in port.
            But if you set sail without food, you will starve before you reach the next port. Every crewmember uses one
            unit of rations per day.
        </p>

        <p>About time... A clock in the upper right shows days and hours. Note that time runs slower in port
            where you are thinking about buying and selling cargo. And time runs faster when you are at sea, because it's kind
            of boring otherwise.
        </p>

        <p>When you are ready to set sail, click on an arrow to move to an adjacent square. Movement takes time. But the
            clock does run a bit faster while you are out there staring at the waves.
        </p>

        <p>When you reach another port, you can click your cargos to sell at the local price.</p>

        <p>Buy bigger and faster ships when you can. And when you amass one million florins, you win. Have fun!</p>
   
    </div>
)

export default IntroText