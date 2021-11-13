import * as actions from './actionTypes'
import { initialStore } from './initialStore'

const reducer = (state = initialStore, action) => {

    switch (action.type) {
        case actions.CHANGE_PAGE_INDEX:
            return {
                ...state, pageIndex: action.payload
            }

        default:
            return state;
    }

}

export default reducer