import PRODUCTS from '../../data/dummy-data'
const initialState ={
    availableProducts:PRODUCTS,
    userProducts:PRODUCTS.filter(prod=>prod.ownnerId==='u1') //dummy user data
}

export default (state=initialState, action) =>{
return state;
};