import axios from 'axios'

export const get = (endPoint) => {
    return axios({
        method: 'GET',
        url: endPoint
    }).then((response) => {
        console.log('response', response)
        return response
    }).catch((err) => {
        return err.response
    })
}