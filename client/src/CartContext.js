import { createContext, useState } from 'react';
import { productsArray, getProductData } from './productsStore';

const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOne: () => {},
    removeOne: () => {},
    clearFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider(children) {
    const [items, setItems] = useState([]);

    const contextValue = {
        items,
        getProductQuantity,
        addOne,
        removeOne,
        clearFromCart,
        getTotalCost
    };

      function getProductQuantity(id) {
        const quantity = items.find(item => item.id === id)?.quantity;
        if (quantity === undefined) {return 0;} else {return quantity;}}

        function addOne(id) {
            const quantity = getProductQuantity(id);
            if (quantity === 0) {
                setCartProducts([...cartProducts, {id: id, quantity: 1}])
            } else {
                setCartProducts(cartProducts.map(
                        item => item.id === id
                        ?{ ...item, quantity: item.quantity +1 }
                        : item))}
         }

        function removeOne(id) {
            const quantity = getProductQuantity(id);
            if (quantity === 1) {
                clearFromCart(id);
            } else {
                setCartProducts(cartProducts.map(
                    item => item.id === id
                    ?{ ...item, quantity: item.quantity -1 }
                    : item))
            }
        }

        function clearFromCart(id) {
            setCartProducts(cartProducts.filter(item => item.id !== id));
        }   

        function getTotalCost() {
            let totalCost = 0;
            cartProducts.map((cartItem) => {
                const productData = getProductData(cartItem.id);
                totalCost += productData.price * cartItem.quantity;
            });
            return totalCost;
        }


    // function getProductQuantity(id) {
    //     const item = items.find((item) => item.id === id);
    //     return item ? item.quantity : 0;
    // }

    // function addOne(id) {
    //     const item = items.find((item) => item.id === id);
    //     if (item) {
    //         item.quantity++;
    //     } else {
    //         const product = productsArray.find((product) => product.id === id);
    //         setItems([...items, { ...product, quantity: 1 }]);
    //     }
    // }

    // function removeOne(id) {
    //     const item = items.find((item) => item.id === id);
    //     if (item) {
    //         if (item.quantity > 1) {
    //             item.quantity--;
    //         } else {
    //             clearFromCart(id);
    //         }
    //     }
    // }

    // function clearFromCart(id) {
    //     setItems(items.filter((item) => item.id !== id));
    // }

    // function getTotalCost() {
    //     return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // }

    return (
        <CartContext.Provider
            value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;