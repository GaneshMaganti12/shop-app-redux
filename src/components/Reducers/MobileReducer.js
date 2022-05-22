import { Buy_Mobile } from "../Actions/ActionType"

const initialState = {
    noOfMobiles : 30
}

const MobileReducer = (state = initialState, action) =>{
    switch(action.type){
        case Buy_Mobile : return {
            ...state, noOfMobiles: state.noOfMobiles - action.payload
        }
        default:
            return state
    }
}

export default MobileReducer