import "../../assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "../../layouts/Dashboard/Users/UserProfie";
import Messages from "../../layouts/Dashboard/Users/UserMessage";
import Friends from "../../layouts/Dashboard/Users/UserFriends";
import EditProfile from "../../layouts/Dashboard/Users/UserEditProfile";
import { TodoApp } from "../../layouts/Frontend/ToDoPage/ToDoPage";
import CalendarPage from "../../layouts/Dashboard/Users/Calendar/CalendarPage";
import NewEvent from "../../layouts/Dashboard/Users/Calendar/NewEvent";

const SideBar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div className="sideBar">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <div className="header">Menu</div>
          <li>
            <Link to={"/user/profile"} className="nav-link">
              Profile
            </Link>
          </li>
          <li>
            <Link to={"/user/messages"} className="nav-link">
              Messages
            </Link>
          </li>
          <li>
            <Link to={"/user/friends"} className="nav-link">
              Friend
            </Link>
          </li>
          <li>
            <Link to={"/todo"} className="nav-link">
              ToDo List
            </Link>
          </li>
          <li>
            <Link to={"/calendar"} className="nav-link">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="/user/edit" component={EditProfile} />
        <Route exact path="/user/messages" component={Messages} />
        <Route exact path="/user/friends" component={Friends} />
        <Route exact path="/todo" component={TodoApp} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/calendar/new" component={NewEvent} />
      </Switch>
    </div>
  </Router>
);

export default SideBar;
