import axios from "axios";
import {
    ADD_NEW_TODO,
    GETALL_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    DELETE_TODO, TOGGLE_TAB
} from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodos = (todoText) => async (dispatch) => {
    try {
        if (todoText.trim() === '') return;
        const res = await axios.post(`${API_URL}/todos`, {text: todoText});
        dispatch({type: ADD_NEW_TODO, payload: res.data});
    } catch (error) {
        console.error("Error adding new todo:", error);
    }
};

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({type: GETALL_TODO, payload: res.data});
    } catch (error) {
        console.error("Error getting all todos:", error);
    }
};

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({type: TOGGLE_TODO, payload: res.data});
    } catch (error) {
        console.error("Error toggling todo:", error);
    }
};

export const updateTodo = (id, text) => async (dispatch) => {
    try {
        if (text.trim() === '') return;
        const res = await axios.put(`${API_URL}/todos/${id}`, {text});
        dispatch({type: UPDATE_TODO, payload: res.data});
    } catch (error) {
        console.error("Error updating todo:", error);
    }
};


export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({type: DELETE_TODO, payload: res.data});
    } catch (error) {
        console.error("Error updating todo:", error);
    }
};


export const toggleTab = (tab) => async (dispatch) => {
    dispatch
    ({
        type: TOGGLE_TAB,
        filter : tab   
    })
}