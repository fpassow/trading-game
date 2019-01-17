import React from 'react'
import { connect } from 'react-redux'

const CashComponent = ({cash}) => (
    <div >
        <h2>Strongbox: {cash} florins ( &#402; ) </h2>
    </div>
)


const mapStateToProps = state => ({
  cash: state.cash
})

export default connect(
  mapStateToProps
)(CashComponent)