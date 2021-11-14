import React from 'react'
import './header.css'
import { useSelector } from 'react-redux'
import Categories from '../Categories/Categories';
import PageWrapper from '../PageWrapper/PageWrapper'


const Header = () => {
    const state = useSelector(state => state)

    const {
        restaurantGetAPIData = [],
        numberOfOrders = 0
    } = state

    console.log('restaurantGetAPIData', restaurantGetAPIData)
    return (
        <>
            {
                restaurantGetAPIData?.length > 0 ?
                    <>
                        <div className='container' style={{ maxWidth: `${window.innerWidth}px` }}>
                            <div className='row'>
                                <div className="col-8" style={{
                                    textAlign: 'left'
                                }}>
                                    <h3>{restaurantGetAPIData[0]?.restaurant_name}</h3>
                                </div>
                                <div className="col-4"
                                    style={{ textAlign: 'right' }}
                                >
                                    <a>Orders
                                        <img alt={numberOfOrders}/>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <Categories categoryNames={restaurantGetAPIData[0]?.table_menu_list} />
                        <PageWrapper categoryNames={restaurantGetAPIData[0]?.table_menu_list} />
                    </> : 'loading....'
            }
        </>
    )
}

export default Header
