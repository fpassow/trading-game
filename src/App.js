import React from 'react'
import { connect } from 'react-redux'
import WelcomePage from './welcome/WelcomePage'
import MainPage from './MainPage'
import { showWelcomePage, startNewGame } from './actions'
import * as stateUtils from './stateUtils'

/*
 * This is the absolute top level component of this project.
 * It can dispay the WelcomePage component, the MainPage component for actually playing the game,
 * or a simple "Game Over" screen.
 * 
 * This component is used by index.js.
 */

const AppComponent = ({
    showingWelcomePage, 
    showWelcomePage, 
    hideWelcomePage, 
    hasShip, 
    isInPort, 
    gameOver, 
    gameOverMessage, 
    cash, 
    cashToWin, 
    startNewGame, 
    ticks, 
    days, 
    ticksToday
}) => {
    if (gameOver) {
        return (
            <div className="App" style={{textAlign:'center'}}>
                <br /><br /><br />
                <h1>Game Over: {gameOverMessage}</h1>
                <button onClick={startNewGame}>Start a new game</button>
            </div>
        )
    }
    if (cash >= cashToWin) {
        return (
            <div className="App" style={{textAlign:'center'}}>
                <br /><br /><br />
                <h1>Fifty thousand florins!</h1>
                <h1>Achieved on day {days} at {ticksToday}:00.</h1>
                <h1>You Win !!!!!!!!!!!!!!!!</h1>
                <button onClick={startNewGame}>Start a new game</button>
            </div>
        )
    }
    if (showingWelcomePage) {
        return <div className="App"><WelcomePage hideWelcomePage={hideWelcomePage} ticks={ticks} /></div>
    }
    return <div className="App"><MainPage showWelcomePage={showWelcomePage} hasShip={hasShip} isInPort={isInPort} /></div>
}

const mapStateToProps = state => ({
  showingWelcomePage: state.showingWelcomePage,
  hasShip: !!state.myShipId,
  isInPort: stateUtils.getCurrentPlace(state).placeType === 'PORT',
  gameOver: state.gameOver,
  gameOverMessage: state.gameOverMessage,
  ticks: state.ticks,
  days: state.days,
  ticksToday: state.ticksToday,
  cash: state.cash,
  cashToWin: state.cashToWin
})

const mapDispatchToProps = dispatch => ({
  showWelcomePage: () => dispatch(showWelcomePage(true)),
  hideWelcomePage: () => dispatch(showWelcomePage(false)),
  startNewGame: () => dispatch(startNewGame())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)