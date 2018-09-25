import React from "react";
import { Button, Form, FormGroup, Label, Col, Input, Row } from "reactstrap";
import DatePicker from "react-date-picker";

class NewEvent extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });
  render() {
    return (
      <div className="container">
        <div className="registerBox">
          <div className="header">New Event</div>
          <Form>
            <Row>
              <center>
                <FormGroup>
                  <Label>Pick Date</Label>
                  <Col sm={10}>
                    <DatePicker
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </Col>
                </FormGroup>
              </center>
              <FormGroup row>
                <Label for="eventTitle" sm={2}>
                  Title of Event
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="text"
                    id="eventTitle"
                    placeholder="Please enter title of event"
                  />
                </Col>
              </FormGroup>
            </Row>
            <FormGroup row>
              <Label for="eventNotes" sm={2}>
                Notes
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="text"
                  id="eventNotes"
                  placeholder="Please enter notes for event"
                />
              </Col>
            </FormGroup>
          </Form>
          <hr />
          <Button color="success">Save</Button>{" "}
          <Button color="danger">Cancel</Button>
        </div>
      </div>
    );
  }
}

export default NewEvent;
