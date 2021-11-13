import React from 'react'
import { useDispatch } from 'react-redux'
import * as actionCreator from '../../redux/actionCreators'


const Categories = ({ categoryNames }) => {
    const dispatch = useDispatch()
    const handleTabClick = (index) => {
        dispatch(actionCreator.changePageindex(index))
    }
    return (
        <>
            <div style={{ boxShadow: '0px 5px 5px #bfced6', display: 'flex', justifyContent: 'center', overflowX:'auto' }}>
                {
                    categoryNames.map((categ, index) => {
                        return (<div style={{ marginLeft: '20px' }}
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
