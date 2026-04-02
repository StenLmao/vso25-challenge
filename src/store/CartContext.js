import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => {}
});

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, { ...action.item, amount: 1 }];
        }

        return {
            ...state,
            items: updatedItems
        };
    }

    return state;
}

export const CartContextProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: []
    });

    const addToCart = (item) => {
       cartDispatch({
            type: "ADD_ITEM",
            item: item
        });
    };

    const cartContext = {
        items: cartState.items,
        addItem: addToCart
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};