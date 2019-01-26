import React from 'react'
import { connect } from 'react-redux'
import WelcomePage from './WelcomePage'
import MainPage from './MainPage'
import { showWelcomePage } from './actions'

const AppComponent = ({showingWelcomePage, showWelcomePage, hideWelcomePage, hasShip}) => (
    <div className="App">
        {showingWelcomePage ? <WelcomePage hideWelcomePage={hideWelcomePage} /> :
                              <MainPage showWelcomePage={showWelcomePage} hasShip={hasShip} />
        }
    </div>
)


const mapStateToProps = state => ({
  showingWelcomePage: state.showingWelcomePage,
  hasShip: !!state.myShipId
})

const mapDispatchToProps = dispatch => ({
  showWelcomePage: () => dispatch(showWelcomePage(true)),
  hideWelcomePage: () => dispatch(showWelcomePage(false))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)