import axios from 'axios'

export const get = (endPoint) => {
    return axios({
        method: 'GET',
        url: endPoint
    }).then((response) => {
        return response
    }).catch((err) => {
        return err.response
    })
}