import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { onCreateOrder } from "./graphql/subscriptions";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  const [orders, setOrders] = useState([]);

  function fetchorders() {
    const ingredientData = API.graphql(
      graphqlOperation(onCreateOrder)
    ).subscribe({
      next: (result) => {
        setOrders([...orders, result.value.data.onCreateOrder]);
      },
    });
  }

  useEffect(() => {
    fetchorders();
  }, []);

  return (
    <div className="App">
      <Row>
        <Col>
          <Row>
            <Col
              style={{
                padding: "50px",
              }}
            >
              <Card>
                <Card.Header>
                  <Card.Title as="h5">Pending Orders</Card.Title>
                </Card.Header>

                {orders.map((order, index) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{order.orderNumber}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                ))}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col
              style={{
                padding: "50px",
              }}
            >
              <Card>
                <Card.Header>
                  <Card.Title as="h5">Approve Orders</Card.Title>
                </Card.Header>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
