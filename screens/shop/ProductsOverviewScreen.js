import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import Colors from '../../constants/Color';
import { CATEGORIES } from '../data/dummyData'
import CategoryGridTile from '../components/CategoryGridTile'
import {HeaderButtons , Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { Ionicons } from '@expo/vector-icons'


const ProductsOverviewScreen = props => {
    // console.log("props", props)

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                props.navigation.navigate({ routeName: 'CategoryMealScreen', params: { categoryID: itemData.item.id } })
            }} />

        );
    }

    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
};

ProductsOverviewScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Meal Category',
    headerLeft:  <Ionicons name="reorder-three-outline" size={20} color={Colors.primaryColor} onPress={()=>{navData.navigation.toggleDrawer()}} />
    // <Button title="=" onPress={()=>{navData.navigation.toggleDrawer()}} />
    // <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item title="Menu" iconName='ios-menu' onPress={()=>{}}/>
    // </HeaderButtons>
    }
    }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        // borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'

    }

})
export default ProductsOverviewScreen