import Button from 'react-bootstrap/Button';
import CartContext from "../CartProvider";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = CartContext();
    const id = props.id;
    const quantity = props.quantity;
    const name = props.name;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.name}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.clearFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    );
}

export default CartProduct;