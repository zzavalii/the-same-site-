import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postReducer';
import dialogReducer from './dialogReducer';
import datingReducer from "./datingReducer";

const store = configureStore({
    reducer: {
        postState: postReducer,
        dialogState: dialogReducer,
        datingState: datingReducer
    }
});

window.store = store

export default store;