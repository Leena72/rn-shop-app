import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../../constants/Colors'

const ProductItem = (props) => {
    let TouchableComp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }
    return (

        <View style={styles.products}>
        <View style={styles.touchable}>
            <TouchableComp onPress={props.onViewDetail} useForeground>
                <View>
                    <Image style={styles.image} source={{ uri: props.image }}></Image>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Text style={styles.price}>
                        ${props.price.toFixed(2)}
                    </Text>
                    <View style={styles.actions}>
                        <Button style={styles.button} color={Colors.primary} title="Detail" onPress={props.onViewDetail} />
                        <Button stye={styles.button} color={Colors.primary} title="Go to Cart" onPress={props.onAddToCart} />
                    </View>
                </View>
            </TouchableComp>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    products: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow:'hidden'

    },
    touchable:{
        borderRadius: 10,
        overflow:'hidden'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        paddingHorizontal: 20
    },
    price: {
        fontSize: 14,
        color: '#888',
        paddingHorizontal: 20,
    },
    actions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    button: {
        width: 150
    }
})

export default ProductItem