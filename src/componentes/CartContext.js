import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCart] = useState([]);

    const addToCart = (item, qty) => {
        let same = cartList.find(produc => produc.itemId === item.id);
        if (same === undefined) {
            setCart([
                ...cartList,
                {
                    itemId: item.id,
                    itemName: item.name,
                    itemPrice: item.price,
                    itemImg: item.img,
                    itemMarca: item.marca,
                    itemQty: qty
                }
            ])}
        else {
            same.itemQty += qty;
            setCart([...cartList]);
        }
    };

    const removeCartList = () => {
        setCart([]);
    };

    const deleteItem = (id) => {
        let result = cartList.filter((item) => item.itemId !== id);
        setCart(result);
    };

    const calculateTotalItems = (price, qty) => {
        return price * qty;
    };

    const calculateTotalQty = () => {
        let total = 0;
        cartList.map((item) => {
            total += item.itemQty;
        });
        return total;
    }

    const calculateSubTotalPrice = () => {
        let total = 0;
        cartList.map((item) => {
            total += item.itemPrice * item.itemQty;
        });
        return total;
    }

    const calculateTax = () => {
        let total = 0;
        cartList.map((item) => {
            total += item.itemPrice * item.itemQty * 0.21;
        });
        return total;
    }

    const calculateTotalPrice = () => {
        let total = 0;
        cartList.map((item) => {
            total += item.itemPrice * item.itemQty * 1.21;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCartList,
            deleteItem,
            calculateTotalItems,
            calculateTotalQty,
            calculateSubTotalPrice,
            calculateTax,
            calculateTotalPrice

        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

