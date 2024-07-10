import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Navigation from './Navigation';
import configureStores from './Features/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';
export default function App() {
  const { persistor, store } = configureStores()
  return <Provider store = {store}>
    <PersistGate 
    loading = {<Loader/>}
    persistor={persistor}
    >
      <Navigation />
    </PersistGate>
    </Provider>;
}
