import * as actions from './actionTypes'
import { initialStore } from './initialStore'

const reducer = (state = initialStore, action) => {

    switch (action.type) {
        case actions.CHANGE_PAGE_INDEX:
            return {
                ...state, pageIndex: action.payload
            }
        case actions.GET_RESTAURANT_DATA:
            console.log('action.payload', action.payload)
            return {
                ...state,
                restaurantGetAPIData: action.payload
            }
        case actions.UPDATE_NUMBER_OF_ORDERS:
            return {
                ...state,
                numberOfOrders: action.payload
            }
        default:
            return state;
    }

}

export default reducer