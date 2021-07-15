import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ShopNaigation from './navigator/ShopNaigation'

import productReducer from './store/reducer/products';

const rootReducer = combineReducers({
  products: productReducer //products is key any name you can give
})
const store = createStore(rootReducer);

export default function App() {
  return (
   <Provider store={store}>
     {/* <View style={styles.container}>
<Text>hello everyone</Text>
     </View> */}
     <ShopNaigation/>
   </Provider>
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
