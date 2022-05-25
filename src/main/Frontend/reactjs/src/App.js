import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import ListSporcuComponent from "./components/Sporcu/ListSporcuComponent";
import AddSporcuComponent from "./components/Sporcu/AddSporcuComponent";
import UpdateSporcuComponent from "./components/Sporcu/UpdateSporcuComponent";
import ViewSporcuComponent from "./components/Sporcu/ViewSporcuComponent";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    return "";
  };

  return (
    <Router id="router">
      <NavigationBar />
      <Container id="container">
        <Row>
          <Col id="col" lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/sporcu" exact component={ListSporcuComponent} />
              <Route path="/sporcu-kayit" exact component={AddSporcuComponent} />
              <Route path="/sporcu-guncelle/:id" exact component={UpdateSporcuComponent} />
              <Route path="/sporcu-guruntule/:id" exact component={ViewSporcuComponent} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="Kullanıcı başarıyla çıkış yaptı." />
                )}
              />
            </Switch> 
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
