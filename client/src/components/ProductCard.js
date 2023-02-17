import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";
import { useContext } from "react";
import './ProductCard.css';

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  console.log(props);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  console.log(productQuantity)


  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ?
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">

                <Button sm="6" onClick={() => cart.addOne(product.id)} className="mx-2">+</Button>
                <Button sm="6" onClick={() => cart.removeOne(product.id)} className="mx-2">-</Button>
              </Col>
            </Form>
          </>

          : <Button sm="6" onClick={() => cart.addOne(product.id)} className="mx-2">Add To Cart</Button>
        }
        <>

          <Button
            variant="danger"
            onClick={() => cart.clearFromCart(product.id)}
            className="my-2"
          >
            Remove All from Cart
          </Button>
        </>

        <Card.Img src={product.image} className="image"/>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
