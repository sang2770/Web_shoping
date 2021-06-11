import {createStore} from '@reduxjs/toolkit'
import rootReducer from '../Reducer/rootReducer'
const store =createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

export default store;