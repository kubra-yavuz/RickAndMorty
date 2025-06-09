import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slices/characterSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
    reducer: {
        character: characterReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;