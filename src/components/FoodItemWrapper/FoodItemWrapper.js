import React from 'react'

const FoodItemWrapper = ({ dish }) => {
    return (
        <div style={{ borderBottom: '0.5px solid' }}>
            <div className='container' style={{ margin: '20px', display: 'grid' }}>
                <div class="row">
                    <div class="col-1">
                        vEG
                    </div>
                    <div class="col-8">
                        <p>{dish?.dish_name}</p>
                        <p style={{ float: 'left' }}
                        // className="text-left-align"
                        >{`${dish?.dish_currency} ${dish?.dish_price}`}</p>
                        <p>{`${dish?.dish_description}`}</p>
                        {
                            dish?.dish_Availability ?
                                <>
                                    <p>
                                        <div class="btn-group" role="group" aria-label="Basic example" >
                                            <button type="button" class="btn btn-primary" style={{ borderRadius: '20px 0px 0px 20px', lineHeight: '0.8' }}>+</button>
                                            <span class="btn-primary" style={{ verticalAlign: 'center', textAlign: 'center', minWidth: '20px' }}>88</span>
                                            <button type="button" class="btn btn-primary" style={{ borderRadius: '0px 20px 20px 0px', lineHeight: '0.8' }}>-</button>
                                        </div>
                                    </p>
                                    {
                                        dish?.addonCat?.length > 0 &&
                                        <p>Customizations Available</p>
                                    }
                                </> :
                                <p>Not Available</p>
                        }
                    </div>
                    <div class="col-1">
                        <span style={{ float: 'right' }}
                        // className="text-right-align"
                        >{`${dish?.dish_calories} Calories`}</span>
                    </div>
                    <div class="col-2">
                        <img src={dish?.dish_image} alt='dish_img' width='100px' height='100px' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItemWrapper
