import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../redux/actionCreators'
import './categories.css'


const Categories = ({ categoryNames }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const {
        pageIndex = 0
    } = state
    const handleTabClick = (index) => {
        dispatch(actionCreator.changePageindex(index))
    }
    return (
        <>
            {/* <div style={{ boxShadow: '0px 5px 5px #bfced6', display: '-webkit-box', justifyContent: 'center', overflowX: 'auto', position: 'sticky', top: '10.7vh', background: 'white', zIndex: 1 }}> */}
            <div className='all-categories'>
                {
                    categoryNames.map((categ, index) => {
                        return (<div className={`${index === pageIndex ? 'selected-category' : ''}`} style={{ marginLeft: '2vh' }}
                            onClick={() => handleTabClick(index)}>
                            <p>{categ.menu_category}</p>
                        </div>)
                    })
                }
            </div>

        </>
    )
}

export default Categories
