import { Button, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";
import { BsCart3 } from 'react-icons/bs';

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
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button style={{ backgroundColor: "#FFB612", color: "#203731", border: " 3px solid #203731", borderRadius: "20px", marginTop: "20px", marginBottom: "0px"}} onClick={handleShow}><BsCart3 style={{ fontSize: "28px" }}/> ({productsCount} Items)</Button>
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
