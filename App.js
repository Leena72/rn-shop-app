import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productReducer from './store/reducer/product'

const rootReducer = combineReducers({
  products:productReducer
})

const Store = createStore(rootReducer)
export default function App() {
  return (
    <View style={styles.container}>
          <Provider store={Store}>
            <View>...</View>
          </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
