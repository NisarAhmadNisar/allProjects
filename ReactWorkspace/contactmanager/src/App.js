import React, { Component } from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      //jsx extension is javascript extension like html
      //return can only return one div - dont use more than two div
      // taking input is called props short for properties
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContact}
                ></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );

    //THIS IS THE EQUIVALENT OF ABOVE WITHOUT JXS
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App component")
    // );
  }
}

export default App;
