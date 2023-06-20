import { todoInitState } from "./initialState";

export const todoReducer = (state = todoInitState, action) => {
    switch (action.type) {
        case "createTodo":
            return {
                ...state,
                todo: [...state.todo, { ...action.payload }],
            };
    
        default:
            return state;
    };
}; 