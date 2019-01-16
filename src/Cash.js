import React from 'react'
import { connect } from 'react-redux'

const CashComponent = ({cash}) => (
    <div>
        {cash} florins ( &#402 )
    </div>
)


const mapStateToProps = state => ({
  cash: state.cash
})

export default connect(
  mapStateToProps
)(CashComponent)