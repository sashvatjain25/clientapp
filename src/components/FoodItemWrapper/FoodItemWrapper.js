import React from 'react'

const FoodItemWrapper = ({ dish }) => {
    return (
        <div style={{ borderBottom: '0.5px solid' }}>
            <p>{dish?.dish_name}</p>
            <p>
                <span style={{textAlign:'left'}}
                // className="text-left-align"
                >{`${dish?.dish_currency} ${dish?.dish_price}`}</span>
                <span  style={{textAlign:'left'}}
                // className="text-right-align"
                >{`${dish?.dish_calories} Calories`}</span>
            </p>
        </div>
    )
}

export default FoodItemWrapper
