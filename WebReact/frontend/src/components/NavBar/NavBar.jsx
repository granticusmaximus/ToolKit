import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from "reactstrap";
import HomePage from "../../layouts/Frontend/Home/Home";
import DashBoard from "../../layouts/Dashboard/Users/Dashboard";
import ContactPage from "../../layouts/Frontend/Contact/Contact";
import Board from "../../layouts/Projects/Board";
import RegisterPage from "../../layouts/Frontend/Register/RegisterPage";
import PostPage from "../../layouts/Dashboard/Users/Posts/PostPage";
import "../../assets/css/App.css";

export default class NaviRoute extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-default"
            style={{ backgroundColor: "#263342", height: "60px" }}
          >
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/postproject"} className="nav-link">
                  Projects
                </Link>
              </li>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Account Info
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <li>
                      <Link to={"/register"} className="nav-link">
                        Register
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <li>
                      <Link to={"/dashboard"} className="nav-link">
                        User Dashboard
                      </Link>
                    </li>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ul>
            <div className={"col-xs-6 text-right"} style={{ color: "white" }}>
              <ButtonDropdown
                color="danger"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>Settings</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Account Settings</DropdownItem>
                  <DropdownItem>Another Setting</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Setting</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <button
                style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
                disabled={true}
                className={"btn btn-link"}
              >
                <i
                  style={{ padding: "10px 5px 0px 0px" }}
                  className={"fa fa-user fa-1x"}
                  aria-hidden="true"
                />{" "}
                CRM Tool
              </button>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/projects" component={Board} />
            <Route path="/postproject" component={PostPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
