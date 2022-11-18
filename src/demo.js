const initialState = {
    cartItems: [
        {
            id: 1,
            qty: 0,
            price: 0,
        },
        {
            id: 2,
            qty: 0,
            price: 0,
        },
        {
            id: 3,
            qty: 0,
            price: 0,
        },
    ],
    subTotal: 0,
    tax: 0,
    shippingCharges: 0,
    total: 0,
    shippingInfo: {},
    cartItemsCount: 0
};

for(let i = 0 ; i < initialState.cartItems.length ; i++){
    if(initialState.cartItems[i].id === 1){
        initialState.cartItems[i].qty +=1 ;
        break;
    }
}
console.log(initialState);