import { DECREMENT, INCREMENT } from "../types/types";

const initialState = { 
    count: 0
}

function counterReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT: return {...state, count: state.count+action.payload};
        case DECREMENT: return {...state, count: state.count-action.payload};
        
        default: return state;
    }
}

export default counterReducer;