import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Configure the store
const store = configureStore({
  reducer: rootReducer,
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;
