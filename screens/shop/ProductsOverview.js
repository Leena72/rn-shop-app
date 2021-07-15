import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem'

const ProductOverviewScreen = (props) => {
    const product = useSelector(state => state.products.availableProducts)// useSelector take input from redux state and the cbined reducer key which point towards available products
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
                        onAddToCart={() => { }}
                    />
            } />
    )
}

ProductOverviewScreen.navigationOptiions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen