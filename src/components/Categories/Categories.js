import React from 'react'
import { useDispatch } from 'react-redux'
import * as actionCreator from '../../redux/actionCreators'

const Categories = () => {
    const dispatch = useDispatch()
    const handleTabClick = (index) => {
        dispatch(actionCreator.changePageindex(index))
    }
    return (
        <div style={{ boxShadow: '0px 5px 5px #bfced6', display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginLeft: '20px' }}
                onClick={() => handleTabClick(0)}>
                <p>Category1</p>
            </div>
            <div style={{ marginLeft: '20px' }}
                onClick={() => handleTabClick(1)}>
                <p>Category2</p>
            </div>
            <div style={{ marginLeft: '20px' }}
                onClick={() => handleTabClick(2)}>
                <p>Category3</p>
            </div>
        </div>
    )
}

export default Categories
