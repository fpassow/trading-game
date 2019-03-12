import React from 'react'
import { connect } from 'react-redux'

const cashBoxStyle = {
  background: 'gold',
  border: '5px solid brown',
  width: '150px',
  textAlign: 'center',
  margin: '10px auto 10px auto'
}
const CashComponent = ({cash}) => (
    <div style={cashBoxStyle}>
        Cash: {cash} florins
    </div>
)

const mapStateToProps = state => ({
  cash: state.cash
})

export default connect(
  mapStateToProps
)(CashComponent)