import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Убедитесь, что путь корректный

const store = configureStore({
  reducer: {
    counter: counterReducer, // добавьте свой редюсер в store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };