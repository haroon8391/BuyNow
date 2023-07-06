const initialState = {
    cartItems: [],
};

const handleCart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            // Check if the product is already in the cart

            const existingItem = state.cartItems.find((item) => {
                return item.id === action.payload.id;
            })

            if (existingItem) {
                // If the product already exists in the cart, update the quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                // If the product does not exist in the cart, add it
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        { ...action.payload, quantity: 1 },
                    ],
                };
            }

        case 'REMOVE':
            // Remove the product from the cart
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                ),
            };

        default:
            return state;
    }
};

export default handleCart;