import React from 'react'
import { connect } from 'react-redux'
import WelcomePage from './WelcomePage'
import MainPage from './MainPage'
import { showWelcomePage } from './actions'

const AppComponent = ({showingWelcomePage, showWelcomePage, hideWelcomePage, hasShip, gameOver, gameOverMessage}) => {
    if (gameOver) {
        return <div className="App"><br /><br /><br /><h1>Game Over: {gameOverMessage}</h1></div>
    } else if (showingWelcomePage) {
        return <div className="App"><WelcomePage hideWelcomePage={hideWelcomePage} /></div>
    } else {
        return <div className="App"><MainPage showWelcomePage={showWelcomePage} hasShip={hasShip} /></div>
    }
}

const mapStateToProps = state => ({
  showingWelcomePage: state.showingWelcomePage,
  hasShip: !!state.myShipId,
  gameOver: state.gameOver,
  gameOverMessage: state.gameOverMessage
})

const mapDispatchToProps = dispatch => ({
  showWelcomePage: () => dispatch(showWelcomePage(true)),
  hideWelcomePage: () => dispatch(showWelcomePage(false))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)