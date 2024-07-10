// import {createStore, combineReducers} from 'redux'
// import AuthReducers from './reducers'
// const RootReducers = combineReducers({
//     AuthReducers
// })
// export const store = createStore(RootReducers)

import { persistReducer } from "redux-persist";
import {configureStore} from '@reduxjs/toolkit'
import { persistStore } from "redux-persist";
import {RootReducer} from './reducers';
import { thunk } from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, createStore } from 'redux';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

var middlewares = [thunk]

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

let persistor = persistStore(store)

const configureStores = () => {
    return {persistor, store};
  };
  
  export default configureStores;