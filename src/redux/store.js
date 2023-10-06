import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { сontactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: сontactsReducer,
    filter: filterReducer,
  },
});
