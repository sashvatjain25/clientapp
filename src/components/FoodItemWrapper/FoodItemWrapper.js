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
        <div className='container' style={{ padding: '20px', display: 'grid', borderBottom: '0.5px solid', maxWidth: `${window.innerWidth}px` }}>
            <div class="row" >
                <div class="col-1">
                    {
                        dish?.dish_Type === 1 ? <img src='non-veg.png' id='Non-Veg' height='20px'></img> : <img src='veg.png' id='Veg' height='20px'></img>
                    }
                </div>
                <div class="col-9">
                    <div className='food-Wrapper'>
                        <div><b>{dish?.dish_name}</b></div>
                        <div className='food-Wrapper-Sub'>
                            <div style={{ float: 'left' }}
                            // className="text-left-align"
                            ><b>{`${dish?.dish_currency} ${dish?.dish_price}`}</b></div>
                            <div >
                                <span style={{ float: 'right' }}
                                // className="text-right-align"
                                ><b>{`${dish?.dish_calories} Calories`}</b></span>
                            </div>
                        </div>

                        <div>{`${dish?.dish_description}`}</div>
                        {
                            dish?.dish_Availability ?
                                <>
                                    <div>
                                        <div class="btn-group" role="group" aria-label="Basic example" >
                                            <button type="button" class="btn btn-success" style={{ borderRadius: '20px 0px 0px 20px', lineHeight: '0.8' }} onClick={() => handleOrderNumbersChange(-1)}>-</button>
                                            <span class="btn-success" style={{ verticalAlign: 'center', textAlign: 'center', minWidth: '20px' }}>{itemCount}</span>
                                            <button type="button" class="btn btn-success" style={{ borderRadius: '0px 20px 20px 0px', lineHeight: '0.8' }} onClick={() => handleOrderNumbersChange(1)}>+</button>
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

                <div class="col-2" style={{ float: 'right' }}>
                    <img src={dish?.dish_image} className='img-fluid' alt='dish_img' width='100vw' height='100vw' />
                </div>
            </div>
        </div>
    )
}

export default FoodItemWrapper
