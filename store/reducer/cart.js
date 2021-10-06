import CartItem from "../../model/cart";
import { ADD_TO_CART } from "../action/cart";

const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action) => {
    console.log("action..",action.type)
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            console.log("addedProduct..",addedProduct)
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            let updateOrNewCartItem
            console.log("state.items[addedProduct.id]",state.items[addedProduct.id])
            if (state.items[addedProduct.id]) {
                //update quantity
                updateOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantiy + 1,
                    prodTitle,
                    prodPrice,
                    state.items[addedProduct.id].sum + prodPrice
                );

            }
            else {
                // add product
                updateOrNewCartItem = new CartItem(1, prodTitle, prodPrice, prodPrice)

            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updateOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            }
    }

    return state;
};