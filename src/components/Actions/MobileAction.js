import { Buy_Mobile } from "./ActionType";

export const buyMobile = (num) =>{
    return {
        type: Buy_Mobile,
        payload: num
    }
}