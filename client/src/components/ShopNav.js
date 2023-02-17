import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import CartProvider, { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";

function ShopNavComponent() {
  const cart = useContext(CartContext);
  console.log(cart);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("http://localhost:3000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    }) .then((response) => {return response.json();
  })
    .then((response) => {
      if (response.url) {
        window.location.assign(response.url)
    }});
  
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Hometown Hero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success" onClick={checkout}>
                Purchase
              </Button>
            </>
          ) : (
            <>
              <h1>Cart is empty</h1>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShopNavComponent;
