import React, { Component } from 'react'
import { connect } from 'react-redux'
import WelcomePage from './WelcomePage'
import MainPage from './MainPage'
import { showWelcomePage } from './actions'

const AppComponent = ({showingWelcomePage, showWelcomePage, hideWelcomePage}) => (
    <div className="App">
        {showingWelcomePage ? <WelcomePage hideWelcomePage={hideWelcomePage} /> :
                              <MainPage showWelcomePage={showWelcomePage} />
        }
    </div>
)


const mapStateToProps = state => ({
  showingWelcomePage: state.showingWelcomePage
})

const mapDispatchToProps = dispatch => ({
  showWelcomePage: () => dispatch(showWelcomePage(true)),
  hideWelcomePage: () => dispatch(showWelcomePage(false))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)