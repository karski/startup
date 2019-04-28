import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { searchUsers } from "../graphql/queries";
import { useStore, useAuth } from "../hooks/index";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AUTH_LOGIN } from "../reducers/actions";

import get from "lodash/get";

const Login = props => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [valid, setValid] = useState(false);
  let [isAuthenticating, setIsAuthenticating] = useState(false);
  const [{ auth }, dispatch] = useStore();

  useEffect(() => {
    setValid(email.length > 0 && password.length > 0);
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsAuthenticating(true);
    try {
      await Auth.signIn(email, password);
      const user = await Auth.currentUserInfo();
      console.log("user", user);
      const result = await API.graphql(
        graphqlOperation(searchUsers, {
          filter: {
            uid: {
              match: user.username
            }
          }
        })
      );
      console.log("result", result);
      dispatch({
        type: AUTH_LOGIN,
        payload: get(result, "data.searchUsers.items[0]", null)
      });
    } catch (e) {
      alert(e.message);
    } finally {
      setIsAuthenticating(false);
      props.history.push("/");
    }
  };
  return !auth || !auth.user ? (
    <div id="login">
      <Container className="pt-5">
        <Row className="justify-content-center">
          <Col md="auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={({ target }) => {
                    setEmail(target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-danger ">
                  {!valid && <p>needs password and email</p>}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={({ target }) => {
                    setPassword(target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                type="submit"
                block
                disabled={isAuthenticating}
              >
                {isAuthenticating ? "Submitting" : "Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
        <p>
          Not a member yet: <Link to="/signup">Sign up here.</Link>
        </p>
      </Container>
    </div>
  ) : (
    <div>
      <button onClick={() => props.history.push("/")}>
        Already logged in, click to go back
      </button>
    </div>
  );
};

export default Login;
