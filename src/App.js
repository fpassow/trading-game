import React from 'react'
import { connect } from 'react-redux'
import WelcomePage from './WelcomePage'
import MainPage from './MainPage'
import { showWelcomePage, startNewGame } from './actions'
import * as stateUtils from './stateUtils'

const AppComponent = ({showingWelcomePage, showWelcomePage, hideWelcomePage, hasShip, isInPort, gameOver, gameOverMessage, startNewGame}) => {
    if (gameOver) {
        return (
            <div className="App" style={{textAlign:'center'}}>
                <br /><br /><br />
                <h1>Game Over: {gameOverMessage}</h1>
                <button onClick={startNewGame}>Start a new game</button>
            </div>
        )
    } else if (showingWelcomePage) {
        return <div className="App"><WelcomePage hideWelcomePage={hideWelcomePage} /></div>
    } else {
        return <div className="App"><MainPage showWelcomePage={showWelcomePage} hasShip={hasShip} isInPort={isInPort} /></div>
    }
}

const mapStateToProps = state => ({
  showingWelcomePage: state.showingWelcomePage,
  hasShip: !!state.myShipId,
  isInPort: stateUtils.getCurrentPlace(state).placeType === 'PORT',
  gameOver: state.gameOver,
  gameOverMessage: state.gameOverMessage
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