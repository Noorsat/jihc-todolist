import { DECREMENT, INCREMENT } from "../types/types";

export function increment(){
    return {
        type: INCREMENT
    }
}

export function decrement(){
    return {
        type: DECREMENT
    }
}