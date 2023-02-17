import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import "./ProductCard.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  console.log(props);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  console.log(productQuantity);

  const styles = {
    font: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: "35px",
    },
    background: {
      backgroundColor: "rgb(169 199 164)",
      boxShadow: "5px 5px 10px black",
    },
    fontWeight: {
      fontWeight: "bold",
    },
    borderRadius: {
      borderRadius: "20px",
    },
    greenBackground: {
      backgroundColor: "#203731",
      color: "#FFB612",
      border: " 1px solid #203731",
      borderRadius: "20px",
    },
  };

  return (
    <Card style={styles.background}>
      <Card.Body>
        <Card.Title style={styles.font} className="">
          {product.name}
        </Card.Title>
        <Card.Text className="display-4">${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row} className="d-flex justify-content-center">
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  style={styles.greenBackground}
                  sm="6"
                  onClick={() => cart.addOne(product.id)}
                  className="mx-2"
                >
                  <AiOutlinePlusCircle style={{ fontSize: "28px" }} />
                </Button>
                <Button
                  style={styles.greenBackground}
                  sm="6"
                  onClick={() => cart.removeOne(product.id)}
                  className="mx-2"
                >
                  <AiOutlineMinusCircle style={{ fontSize: "28px" }} />
                </Button>
              </Col>
              <Button
                style={{
                  backgroundColor: "#FFB612",
                  color: "#203731",
                  border: " 1px solid #203731",
                  borderRadius: "20px",
                  width: "60%",
                }}
                onClick={() => cart.clearFromCart(product.id)}
                className="my-2"
              >
                Remove All from Cart
              </Button>
            </Form>
          </>
        ) : (
          <Button
            style={styles.greenBackground}
            sm="6"
            onClick={() => cart.addOne(product.id)}
            className="mx-2"
          >
            Add To Cart
          </Button>
        )}
        <></>
        <Card.Img src={product.image} className="image" />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
