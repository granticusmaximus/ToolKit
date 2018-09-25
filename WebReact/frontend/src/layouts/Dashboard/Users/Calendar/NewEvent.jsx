import React from "react";
import { Button, Form, FormGroup, Label, Col, Input } from "reactstrap";

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
          <hr />
          <Form>
            <FormGroup row>
              <Label for="eventDate" sm={2}>
                Pick Date
              </Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="date"
                  id="eventTitle"
                  placeholder="MM/DD/YYY"
                />
              </Col>
            </FormGroup>
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
