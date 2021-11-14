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

    return (
        <>
            {
                restaurantGetAPIData?.length > 0 ?
                    <>
                        <div className='container page-header' style={{ maxWidth: `${window.innerWidth}px` }}>
                            <div className='row'>
                                <div className="col-8" style={{ textAlign: 'left' }}>
                                    <h3>{restaurantGetAPIData[0]?.restaurant_name}</h3>
                                </div>
                                <div className="col-4"
                                    style={{ textAlign: 'right' }}
                                >
                                    <a
                                        // href="#" 
                                        className="cart position-relative d-inline-flex"
                                        aria-label="View your shopping cart">
                                        My Orders &nbsp;
                                        <i className="bi bi-cart-fill"></i>
                                        <span className="cart-basket d-flex align-items-center justify-content-center">
                                            {numberOfOrders}
                                        </span>
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
