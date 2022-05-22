import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import LaptopReducer from '../Reducers/LaptopReducer'
import MobileReducer from '../Reducers/MobileReducer'

const rootReducer = combineReducers({
    laptop: LaptopReducer,
    mobile: MobileReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store