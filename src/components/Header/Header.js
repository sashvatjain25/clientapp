import React from 'react'
import './header.css'
import { useSelector } from 'react-redux'
import Categories from '../Categories/Categories';
import PageWrapper from '../PageWrapper/PageWrapper'


const Header = () => {
    const state = useSelector(state => state)

    const {
        restaurantGetAPIData = []
    } = state
    console.log('restaurantGetAPIData', restaurantGetAPIData)
    return (
        <div id="textbox" >
            {
                restaurantGetAPIData?.length > 0 ?
                    <>
                        <div style={{ display: 'flow-root' }}>
                            <span className="text-left-align">
                                <h3>{restaurantGetAPIData[0]?.restaurant_name}</h3>
                            </span>
                            <span className="text-right-align">
                                <a>Orders
                                    <img></img>
                                </a>
                            </span>
                        </div>

                        <Categories categoryNames={restaurantGetAPIData[0]?.table_menu_list} />
                        <PageWrapper categoryNames={restaurantGetAPIData[0]?.table_menu_list} />
                    </> : 'loading....'
            }
        </div>
    )
}

export default Header
