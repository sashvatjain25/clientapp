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
            <div style={{ boxShadow: '0px 5px 5px #bfced6', display: '-webkit-box', justifyContent: 'center', overflowX: 'auto', position:'sticky', top:'10.7vh', background:'white',zIndex:1 }}>
                {
                    categoryNames.map((categ, index) => {
                        return (<div style={{ marginLeft: '2vh' }}
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
