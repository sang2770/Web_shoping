import {combineReducers} from '@reduxjs/toolkit'
import shopReducer from '../Reducer/CartReducer'

const rootReducer=combineReducers({
    shop:shopReducer
})
export default rootReducer;