import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'
import Crew from './Crew'
import Fuel from './Fuel'
import Food from './Food'
import Hold from './Hold'
import * as stateUtils from '../stateUtils'
import * as actions from '../actions'
import {seaBlue} from '../styleConstants'

/*
 * This, and ShiplessPannel, are the two components in this directory which are used
 * directly by code outside this directory.
 *
 * This component represents the player's ship, and has sub-components for the cargo
 * hold, the food store, etc.
 */

const shipStyle = {
  background: 'tan',
  margin: '20px',
  borderRadius: '40px',
  border: '5px solid brown',
  padding: '20px 20px 5px 20px'
}

const nameplateStyle = {
  //background: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
  //border: '1px solid black',
  width: '200px',
  textAlign: 'center',
  margin: '10px auto 10px auto'
}

const ShipPanelComponent = ({cash, myShip, cargo, localPrices, sellCargo}) => (
  <div style={{background:seaBlue}}>
    <div style={shipStyle}>
      <Hold myShip ={myShip} cargo={cargo} localPrices={localPrices} sellCargo={sellCargo} />
      <Food myShip={myShip} />
      <Fuel myShip={myShip} />
      <Crew myShip={myShip} />
      <Cash />
      <div style={nameplateStyle}>
        {"{{{"} <em>{myShip.shipName}</em> {"}}}"}
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  cash: state.cash,
  myShip: stateUtils.getMyShip(state),
  cargo: stateUtils.getCargoOnBoard(state.myShipId, state),
  localPrices: stateUtils.getCurrentPlace(state).prices
})

const mapDispatchToProps = dispatch => ({
  sellCargo: (cargoId) => { dispatch(actions.sellCargo(cargoId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipPanelComponent)