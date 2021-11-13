import * as actions from './actionTypes'

export const changePageindex = (index) => ({
    type: actions.CHANGE_PAGE_INDEX,
    payload: index
})