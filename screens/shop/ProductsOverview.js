import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem'
import * as CartActions from '../../store/action/cart'

const ProductOverviewScreen = (props) => {
    const product = useSelector(state => state.products.availableProducts)// useSelector take input from redux state and the cbined reducer key which point towards available products
     const dispatch = useDispatch()
    return (
        <FlatList data={product}
            keyExtractor={item => item.id}
            renderItem={
                itemData =>
                    <ProductItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onViewDetail={() => {
                            props.navigation.navigate('ProductDetail', {
                                productId: itemData.item.id,
                                productTitle: itemData.item.title
                            })
                        }}
                        onAddToCart={() => { dispatch(CartActions.addToCart(itemData.item))}}
                    />
            } />
    )
}

ProductOverviewScreen.navigationOptiions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen