import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';

class LoginComponent extends React.Component {
  handleEdit = (e) => {
    e.preventDefault();
    const username = this.getUsername.value;
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    const data = {
      username,
      email,
      password
    }
    this.props.dispatch({ type: 'UPDATE', uid: this.props.user.uid, data: data })
  }
  render() {
    return (
      <div className="container">
        <div className="registerBox">
          <div className="header">Login:</div>
          <Form className="form" onSubmit={this.handleSubmit} >
            <hr />
            <FormGroup check row>
              <Label for="registerEmail" sm={2}>
                Email
            </Label>
              <Input required type="text" ref={(input) => this.getEmail = input}
                placeholder="Enter Your Email" /><br /><br />
            </FormGroup>
            <FormGroup check row>
              <Label for="registerPassword" sm={2}>
                Password
            </Label>
              <Input required type="text" ref={(input) => this.getPassword = input}
                placeholder="Enter Password" /><br /><br />
            </FormGroup>
            <center>
              <FormGroup check row>
                <Col sm={{ size: 10 }}>
                  <Button color="success">Login</Button>
                </Col>
              </FormGroup>
            </center>
          </Form>
        </div>
      </div>
    );
  }
}
export default connect()(LoginComponent);