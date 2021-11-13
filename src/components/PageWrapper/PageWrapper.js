import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useSelector } from 'react-redux'
import FoodItemWrapper from '../FoodItemWrapper/FoodItemWrapper'

const PageWrapper = ({ categoryNames }) => {
    const state = useSelector(state => state)
    const {
        pageIndex = 0
    } = state
    console.log('state', state)
    return (
        <div>
            <SwipeableViews enableMouseEvents index={pageIndex}>
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