import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class RegisterComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="registerBox">
          <div className="header">Register Form:</div>
          <hr />
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Please enter an email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="mainPassword" sm={2}>
                Set Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="mainPassword"
                  placeholder="Enter a Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="confirmPassword" sm={2}>
                Confirm Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="confirmPassword"
                  placeholder="Confirm your Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                Profile picture
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" /> I agree to the
                    terms and services
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10 }}>
                <Button color="success">Register Account</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
