import React from 'react'
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native'
import { useSelector ,useDispatch} from 'react-redux'
import Colors from '../../constants/Colors'
import CartItem from '../../model/cart'
import * as CartActions from '../../store/action/cart' 

const ProductDetailScreen = (props) => {
    const productId = props.navigation.getParam('productId')
    // console.log("productid", productId, props)
    const selectProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
    // console.log("selectProduct", selectProduct)
    const dispatch = useDispatch()

    return (
        <ScrollView style={styles.detailView}>
            <Image style={styles.image} source={{uri:selectProduct.imageUrl}}/>
            <View style={styles.action}>
            <Button color={Colors.primary} title="Add to cart" onPress={()=>{dispatch(CartActions.addToCart(selectProduct))}}/>
            </View>
         
            <Text style={styles.price}>
                ${selectProduct.price.toFixed(2)}
            </Text>
            <Text style={styles.description}>
                {selectProduct.description}
            </Text>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions= navData =>{
    return{
        headerTitle:navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
image:{
    width:'100%',
    height:300
},
detailView:{
backgroundColor:'#fff'
},
price:{
    // fontFamily:'open-sans-bold',
    fontSize:20,
    color:'#fff',
    textAlign:'center',
    marginVertical:20
},
description:{
    // fontFamily:'open-sans',
    fontSize:24,
    textAlign:'center',
    color:'black',
},
action:{
    marginVertical:10,
    alignItems:'center'
}
})

export default ProductDetailScreen