import React from 'react'
import './header.css'
import { useSelector } from 'react-redux'
import Categories from '../Categories/Categories';
import PageWrapper from '../PageWrapper/PageWrapper'
// import { Badge, Icon, withBadge } from 'react-native-elements'


const Header = () => {
    const state = useSelector(state => state)

    const {
        restaurantGetAPIData = [],
        numberOfOrders = 0
    } = state


    // const BadgedIcon = withBadge(numberOfOrders)(Icon);

    console.log('restaurantGetAPIData', restaurantGetAPIData)
    return (
        <>
            {
                restaurantGetAPIData?.length > 0 ?
                    <>
                        <div className='container' style={{ maxWidth: `${window.innerWidth}px`, padding: '20px', position: 'sticky', top: '0vh', background: 'white', zIndex: 1 }}>
                            <div className='row'>
                                <div className="col-8" style={{
                                    textAlign: 'left'
                                }}>
                                    <h3>{restaurantGetAPIData[0]?.restaurant_name}</h3>
                                </div>
                                <div className="col-4"
                                    style={{ textAlign: 'right' }}
                                >
                                    {/* <a>Orders */}
                                    {/* <BadgedIcon type="material" name="shopping_cart" /> */}
                                    {/* <img alt={numberOfOrders} /> */}

                                    {/* </a> */}
                                    <a
                                        // href="#" 
                                        class="cart position-relative d-inline-flex"
                                        aria-label="View your shopping cart">
                                        My Orders &nbsp;
                                        <i class="bi bi-cart-fill"></i>
                                        <span class="cart-basket d-flex align-items-center justify-content-center">
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
