import { get } from './service_helper'

const endpoint = 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'

export const getrestaurantResponse = () => {
    return get(endpoint)
}