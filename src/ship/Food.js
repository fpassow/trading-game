import React from 'react'

const Food = ({myShip}) => {
    let foodArr = []
    for (let i = 0; i < myShip.food; i++) {
        foodArr.push(<img src="img/rations.png" alt="rations" key={i} />)
    }
    let foodStyle = {
        border: '2px solid black',
        padding: '5px',
        margin: '5px',
        height: '40px'
    }
    return (
        <div style={foodStyle}>
            {foodArr}
        </div>
    )
}

export default Food
