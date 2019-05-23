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
        marginTop: '5px',
        border: '3px solid brown',
        borderRadius: '5px',
        padding: '3px',
        position: 'relative',
        minHeight: '50px'
    }
    return (
        <div style={foodStyle}>
            {foodArr}
        </div>
    )
}

export default Food
