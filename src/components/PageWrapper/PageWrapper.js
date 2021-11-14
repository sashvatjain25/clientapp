import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useSelector, useDispatch } from 'react-redux'
import FoodItemWrapper from '../FoodItemWrapper/FoodItemWrapper'
import * as actionCreator from '../../redux/actionCreators'

const PageWrapper = ({ categoryNames }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const {
        pageIndex = 0
    } = state

    const handleChangeIndex = (value) => {
        dispatch(actionCreator.changePageindex(value))
    }

    console.log('state', state)
    return (
        <div>
            <SwipeableViews enableMouseEvents index={pageIndex} onChangeIndex={handleChangeIndex}>
                {categoryNames?.map((listType, i) => {
                    return (
                        <div style={{ minHeight: '100px' }}>
                            {listType?.category_dishes?.map((dish, ind) => {
                                return (<FoodItemWrapper dish={dish} />)
                            })}
                        </div>
                    )
                })}
            </SwipeableViews>
        </div>
    )
}

export default PageWrapper