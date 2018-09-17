import React, { Component } from "react";
import "../../assets/css/App.css";
import { FormGroup, FormControl } from "react-bootstrap";
import { Button, Label, Input, Col, Row } from "reactstrap";

class AddClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      message: ""
    };
  }

  validateForm() {
    return (
      this.state.businessName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.address.length > 0 &&
      this.state.city.length > 0 &&
      this.state.state.length > 0 &&
      this.state.zip.length > 0 &&
      this.state.message.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="clientBox">
          <center>
            <div className="header">Add A New Client</div>
          </center>
          <div className="Client">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="fullName" bsSize="large">
                <Col>
                  <Label>Business Name Name</Label>
                  <FormControl
                    autoFocus
                    type="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="email" bsSize="large">
                <Col>
                  <Label>Business Email</Label>
                  <FormControl
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="password" bsSize="large">
                <Col>
                  <Label>Telephone Number</Label>
                  <FormControl
                    value={this.state.phone}
                    onChange={this.handleChange}
                    type="password"
                  />
                </Col>
              </FormGroup>

              <center>
                <Row>
                  <FormGroup controlId="text" bsSize="large">
                    <Col>
                      <Label>Business Address</Label>
                      <FormControl
                        type="text"
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="text" bsSize="large">
                    <Col>
                      <Label>Business City</Label>
                      <FormControl
                        type="text"
                        value={this.state.city}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="text" bsSize="large">
                    <Col>
                      <Label>Business State</Label>
                      <FormControl
                        type="text"
                        value={this.state.state}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="text" bsSize="large">
                    <Col>
                      <Label>Business Zip</Label>
                      <FormControl
                        type="text"
                        value={this.state.zip}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Row>
              </center>

              <FormGroup>
                <Label for="aboutYouText">Business Notes</Label>
                <Input
                  type="textarea"
                  value={this.state.message}
                  name="text"
                  onChange={this.handleChange}
                  id="aboutYouText"
                />
              </FormGroup>
              <Button
                color="warning"
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClient;
