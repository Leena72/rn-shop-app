import React from 'react'
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
const ProductDetailScreen = (props) => {
    const productId = props.navigation.getParam('productId')
    console.log("productid", productId, props)
    const selectProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
    console.log("selectProduct", selectProduct)
    return (
        <ScrollView style={styles.detailView}>
            <Image style={styles.image} source={{uri:selectProduct.imageUrl}}/>
            <Button title="Add to cart" onPress={()=>{}}/>
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
backgroundColor:'black'
},
price:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
    marginVertical:20
},
description:{
    fontSize:24,
    textAlign:'center',
    color:'#fff',
}
})

export default ProductDetailScreen