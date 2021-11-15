import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './foodItemWrapper.css';
import * as actions from '../../redux/actionCreators'

const FoodItemWrapper = ({ dish }) => {
    const dispatch = useDispatch()
    const [itemCount, setitemCount] = useState(0)
    const state = useSelector(state => state)

    const {
        numberOfOrders = 0
    } = state

    const handleOrderNumbersChange = (value) => {
        if (itemCount + value >= 0) {
            setitemCount(itemCount + value)
            dispatch(actions.updateNumberOfOrders(numberOfOrders + value))
        } else {
            setitemCount(0)
        }
    }

    return (
        <div className='container outer-food-wrapper' style={{ maxWidth: `${window.innerWidth}px` }}>
            <div className="row" >
                <div className="col-auto p-2" >
                    {
                        dish?.dish_Type === 1 ? <img src='non-veg.png' id='Non-Veg' height='20px'></img> : <img src='veg.png' id='Veg' height='20px'></img>
                    }
                </div>
                <div className="col p-2">
                    <div className='food-Wrapper'>
                        <div><b>{dish?.dish_name}</b></div>
                        <div className='food-Wrapper-Sub'>
                            <div style={{ float: 'left' }}
                            ><b>{`${dish?.dish_currency} ${dish?.dish_price}`}</b></div>
                            <div >
                                <span style={{ float: 'right' }}
                                ><b>{`${dish?.dish_calories} Calories`}</b></span>
                            </div>
                        </div>

                        <div>{`${dish?.dish_description}`}</div>
                        {
                            dish?.dish_Availability ?
                                <>
                                    <div>
                                        <div className="btn-group" role="group" aria-label="Basic example" >
                                            <button type="button" className="btn btn-success left-button" onClick={() => handleOrderNumbersChange(-1)}>-</button>
                                            <span className="btn-success center-span" style={{}}>{itemCount}</span>
                                            <button type="button" className="btn btn-success right-button" style={{}} onClick={() => handleOrderNumbersChange(1)}>+</button>
                                        </div>
                                    </div>
                                    {
                                        dish?.addonCat?.length > 0 &&
                                        <div style={{ color: 'red' }}>Customizations Available</div>
                                    }
                                </> :
                                <div>Not Available</div>
                        }
                    </div>

                </div>

                <div className="col-auto p-2" style={{ textAlign: 'end' }}>
                    <img src={dish?.dish_image} className='img-fluid' alt='dish_img' width='100vw' />
                </div>
            </div>
        </div>
    )
}

export default FoodItemWrapper
