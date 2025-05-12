import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
switch (action.type) {
    case "ADD_TO_CART":
    return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + parseFloat(action.payload.price),
    };
    case "REMOVE_FROM_CART":
    return {
        ...state,
        items: state.items.filter(
        (item, index) => index !== action.payload.index 
        ),
        total: state.total - parseFloat(action.payload.price),
    };
    case "CLEAR_CART":
    return {
        items: [],
        total: 0,
    };
    default:
    return state;
}
};

export const CartProvider = ({ children }) => {
const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
});

const addToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace("DT", "").trim());
    dispatch({
    type: "ADD_TO_CART",
    payload: { ...item, price: numericPrice },
    });
};

const removeFromCart = (index, price) => {
    dispatch({
    type: "REMOVE_FROM_CART",
    payload: { index, price },
    });
};

const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
};

return (
    <CartContext.Provider
    value={{
        cart: cartState,
        addToCart,
        removeFromCart,
        clearCart,
    }}>
    {children}
    </CartContext.Provider>
);
};

export const useCart = () => {
const context = useContext(CartContext);
if (!context) {
    throw new Error("useCart must be used within a CartProvider");
}
return context;
};