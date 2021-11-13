import * as actions from './actionTypes'
import { getrestaurantResponse } from '../utilities/SeriveGateway/service_methods'

export const changePageindex = (index) => ({
    type: actions.CHANGE_PAGE_INDEX,
    payload: index
})

export const getrestaurantData = () => (dispatch) => {
    getrestaurantResponse().then((resp) => {
        try {
            const {
                data = {},
                status = 0,
            } = resp || {}
            console.log('data', data)
            if (status === 200) {
                const action = {
                    type: actions.GET_RESTAURANT_DATA,
                    payload: data
                }
                dispatch(action)
            } else {

            }
        } catch (error) {

        }
    })
}

export const updateNumberOfOrders = (value) => ({
    type: actions?.UPDATE_NUMBER_OF_ORDERS,
    payload: value
})
