import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './foodItemWrapper.css';
import * as actions from '../../redux/actionCreators'

const FoodItemWrapper = ({ dish }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const {
        numberOfOrders = 0
    } = state
    const handleOrderNumbersChange = (value) => {
        if (numberOfOrders + value >= 0) {
            dispatch(actions.updateNumberOfOrders(numberOfOrders + value))
        } else {
            dispatch(actions.updateNumberOfOrders(0))
        }

    }

    return (
        // <div style={{ borderBottom: '0.5px solid' }}>
        <div className='container' style={{ display: 'grid', borderBottom: '0.5px solid', maxWidth: `${window.innerWidth}px` }}>
            <div class="row" style={{ margin: '20px' }}>
                <div class="col-1">
                    {
                        dish?.dish_Type === 1 ? 'Non-Veg' : ' Veg'
                    }
                </div>
                <div class="col-9">
                    <div className='food-Wrapper'>
                        <div>{dish?.dish_name}</div>
                        <div className='food-Wrapper-Sub'>
                            <div style={{ float: 'left' }}
                            // className="text-left-align"
                            >{`${dish?.dish_currency} ${dish?.dish_price}`}</div>
                            <div >
                                <span style={{ float: 'right' }}
                                // className="text-right-align"
                                >{`${dish?.dish_calories} Calories`}</span>
                            </div>
                        </div>

                        <div>{`${dish?.dish_description}`}</div>
                        {
                            dish?.dish_Availability ?
                                <>
                                    <div>
                                        <div class="btn-group" role="group" aria-label="Basic example" >
                                            <button type="button" class="btn btn-primary" style={{ borderRadius: '20px 0px 0px 20px', lineHeight: '0.8' }} onClick={() => handleOrderNumbersChange(-1)}>-</button>
                                            <span class="btn-primary" style={{ verticalAlign: 'center', textAlign: 'center', minWidth: '20px' }}>{numberOfOrders}</span>
                                            <button type="button" class="btn btn-primary" style={{ borderRadius: '0px 20px 20px 0px', lineHeight: '0.8' }} onClick={() => handleOrderNumbersChange(1)}>+</button>
                                        </div>
                                    </div>
                                    {
                                        dish?.addonCat?.length > 0 &&
                                        <div>Customizations Available</div>
                                    }
                                </> :
                                <div>Not Available</div>
                        }
                    </div>

                </div>

                <div class="col-2" style={{ float: 'right' }}>
                    <img src={dish?.dish_image} alt='dish_img' width='100px' height='100px' />
                </div>
            </div>
        </div>
        // </div>
    )
}

export default FoodItemWrapper
