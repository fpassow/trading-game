import React from 'react'

const Food = ({myShip}) => {
    let foodArr = []
    for (let i = 0; i < myShip.food; i++) {
        foodArr.push(<img src="img/rations.png" alt="rations" key={i} />)
    }
    for (let i = 0; i < (myShip.maxFood - myShip.food); i++) {
        foodArr.push(<img src="img/no_rations.png" alt="Empty rations bay" key={'e'+i} />)
    }
    let foodStyle = {
        border: '2px solid black',
        padding: '5px',
        margin: '5px'
    }
    return (
        <div style={foodStyle}>
            {foodArr}
        </div>
    )
}

export default Food
