import { Buy_Laptop } from "../Actions/ActionType"

const initialState = {
    noOfLaptops : 30
}

const LaptopReducer = (state = initialState, action) =>{
    switch(action.type){
        case Buy_Laptop : return {
            ...state, noOfLaptops: state.noOfLaptops - action.payload
        }
        default:
            return state
    }
}

export default LaptopReducer