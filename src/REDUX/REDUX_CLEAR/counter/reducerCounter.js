import { counterInitState } from "./initialState";
import { INCREMENT } from "./types";


export const counterReducer = (state = counterInitState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                total: action.payload + state.step,
            };
    
        default:
            return state;
    };
};