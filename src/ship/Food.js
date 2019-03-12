import React from 'react'

const Food = ({myShip}) => {
    let foodArr = []
    for (let i = 0; i < myShip.food; i++) {
        foodArr.push(<img src="rations.jpg" alt="rations" key={i} />)
    }
    return (
        <div>
            <h3>Food Store</h3>
            {foodArr} (Capacity: {myShip.maxFood} )
        </div>
    )
}

export default Food
