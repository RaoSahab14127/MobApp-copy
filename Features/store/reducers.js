import { createReducer, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "../../api/AuthReducer";

const appState = {
    name: 'JPay Mobile App',
    url: '',
    version: '1.0.0',
  };
  
  const appReducer = createReducer(appState, _ => {
    return appState;
  });
  
  export const RootReducer = combineReducers({
    app: appReducer,
    AuthReducer: AuthReducer,
  });
  