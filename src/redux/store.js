import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState())
})
export default store
