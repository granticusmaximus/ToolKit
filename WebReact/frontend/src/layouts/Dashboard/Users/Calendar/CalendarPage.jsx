import React from "react";
import Calendar from "../../../../../src/components/Calendar/Calendar";
import "./Calendar.css";
import { Button, Row, Col } from "reactstrap";

class CalendarPage extends React.Component {
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
            <div>
              <Button color="warning">New Event</Button>
            </div>
          </Col>
          <Col />
          <Col>
            <div>
              <Button color="success">Today's Event</Button>
            </div>
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
