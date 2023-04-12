import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@redux/reducers/user/user.reducer';
import suggestionsReducer from './reducers/suggestions/suggestions.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    suggestions: suggestionsReducer
  }
});
