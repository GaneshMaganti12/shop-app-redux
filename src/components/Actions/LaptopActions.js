import { Buy_Laptop } from "./ActionType";

export const buyLaptop = (number) =>{
    return {
        type: Buy_Laptop,
        payload: number
    }
}