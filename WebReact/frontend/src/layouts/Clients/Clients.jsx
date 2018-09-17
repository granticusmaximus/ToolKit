import React, { Component } from "react";
import "../../assets/css/App.css";
import { Alert, Table, Button } from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";
import AddClient from "./AddClient";

class ClientPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Alert color="primary">
            Please be patient as Grant Watson adds more components
          </Alert>
          <h2>Client Page</h2>
          <p>
            I am adding more to this tool, right now, it is in the works to be a
            CRM Tool
          </p>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Button color="warning">
            <Link to={"/addclient"} className="nav-link">
              Add Client
            </Link>
          </Button>
          <Switch>
            <Route path="/addclient" component={AddClient} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ClientPage;
