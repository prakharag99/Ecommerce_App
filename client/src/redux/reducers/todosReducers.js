import * as actionType from "../actions/type";

const initialState = [];

export const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_NEW_TODO:
      return [...state, action.payload];
    case actionType.GETALL_TODO:
      return action.payload;
    case actionType.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, done: !todo.done }
          : todo
      );
    case actionType.UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case actionType.DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload);
    default:
      return state;
  }
};