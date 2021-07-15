import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ShopNaigation from './navigator/ShopNaigation'
import AppLoading  from 'expo-app-loading'
import * as Font from 'expo-font'


import productReducer from './store/reducer/products';

const rootReducer = combineReducers({
  products: productReducer //products is key any name you can give
})
const store = createStore(rootReducer);

// const fetchFont = () => {
//   return Font.loadAsync(
//     {
//       'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//       'open-sans-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
//     }
//   )
// }

export default function App() {
  // const [fontLoaded, setfontLoaded] = useState(false)
  // if (!fontLoaded) {
  //   return <AppLoading startAsync={fetchFont} onFinish={()=>{setfontLoaded(true)}}  onError={console.warn}/>
  // }
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
<Text>hello everyone</Text>
     </View> */}
      <ShopNaigation />
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
