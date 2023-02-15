import { Card, Button, Form, Row, Col } from "react-bootstrap";
import CartProvider from "./CartProvider";
import CartProduct from "./CartProduct";
import { useContext } from "react";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartProvider);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        {productQuantity > 0}?
        <>
          <Form as={Row}>
            <Form.Label column="true" sm="6">
              In Cart: {productQuantity}
            </Form.Label>
            <Col sm="6">
              <Button
                sm="6"
                onClick={() => cart.addOne(product.id)}
                className="mx-2"
              >
                +
              </Button>
              <Button
                sm="6"
                onClick={() => cart.removeOne(product.id)}
                className="mx-2"
              >
                -
              </Button>
            </Col>
          </Form>
          <Button
            variant="danger"
            onClick={() => cart.clearFromCart(product.id)}
            className="my-2"
          >
            Remove All from Cart
          </Button>
        </>
        :<Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;