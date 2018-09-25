import React from "react";
import Calendar from "../../../../../src/components/Calendar/Calendar";
import "./Calendar.css";
import {
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";
import NewEvent from "./NewEvent";

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <span className="icon">date_range</span>
          <span>
            Toolkit
            <b>Calendar</b>
          </span>
        </header>
        <hr />
        <Row>
          <Col>
            <Button color="warning">
              <Link to={"/calendar/new"} className="nav-link">
                New Event
              </Link>
            </Button>
            <Switch>
              <Route path="/calendar/new" component={NewEvent} />
            </Switch>
          </Col>
          <Col />
          <Col>
            <Button color="success" onClick={this.toggle}>
              Today's Events
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Today's Events</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>
                  Save
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default CalendarPage;
