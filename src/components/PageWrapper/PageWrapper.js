import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const PageWrapper = () => {
    return (
        <div>
            <SwipeableViews enableMouseEvents>
                <div style={{ background: 'grey', height: '100px' }}>12</div>
                <div style={{ background: 'pink', height: '100px' }}>45</div>
                <div style={{ background: 'yellow', height: '100px' }}>2435</div>
                <div style={{ background: 'green', height: '100px' }}>234</div>
            </SwipeableViews>
        </div>
    )
}

export default PageWrapper
