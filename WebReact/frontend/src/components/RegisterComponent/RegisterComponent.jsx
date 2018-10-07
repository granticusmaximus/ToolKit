import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';

class RegisterComponent extends React.Component {
  handleEdit = (e) => {
    e.preventDefault();
    const username = this.getUsername.value;
    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    const data = {
      username,
      firstName,
      lastName,
      email,
      password
    }
    this.props.dispatch({
      type: 'ADD_USER',
      data
    })
    this.getUsername.value = '';
    this.getFirstName.value = '';
    this.getLastName.value = '';
    this.getEmail.value = '';
    this.getPassword.value = '';
  }
  render() {
    return (
      <div className="container">
        <div className="registerBox">
          <div className="header">Register Form:</div>
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
              <Label for="registerFirstName" sm={2}>
                First Name
            </Label>
              <Input required type="text" ref={(input) => this.getFirstName = input}
                placeholder="Enter First Name" /><br /><br />
            </FormGroup>
            <FormGroup check row>
              <Label for="registerLastName" sm={2}>
                Last Name
            </Label>
              <Input required type="text" ref={(input) => this.getLastName = input}
                placeholder="Enter Last Name" /><br /><br />
            </FormGroup>
            <FormGroup check row>
              <Label for="registerPassword" sm={2}>
                Password
            </Label>
              <Input required type="text" ref={(input) => this.getPassword = input}
                placeholder="Enter Password" /><br /><br />
            </FormGroup>
            <FormGroup check row>
              <Label for="registerPassword" sm={2}>
                Confirm Password
            </Label>
              <Input required type="text" ref={(input) => this.getPassword = input}
                placeholder="Confirm Password" /><br /><br />
            </FormGroup>
            <center>
              <FormGroup check row>
                <Col sm={{ size: 10 }}>
                  <Button color="success">Register Account</Button>
                </Col>
              </FormGroup>
            </center>
          </Form>


        </div>
      </div>
    );
  }
}
export default connect()(RegisterComponent);