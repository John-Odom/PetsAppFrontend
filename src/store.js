import { createStore } from 'redux'
import rootReducer from './reducers/allReducers'

export default createStore(
    rootReducer,
    // applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)