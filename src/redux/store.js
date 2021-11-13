import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState())
})
export default store
