import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

// import "./contact.css";
//class based component are created with rcc tab

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //METHODS

  //java event functions  -- always use arrow function to def a user defined func
  onShowClick = () => {
    //this will toggle the state of showConcinfo to true or false depnding on the current state it is in
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    //using api instead of a db/backend
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    //deconstruting
    // const { name, email, phone } = this.props;
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body md-3 container">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick.bind(this, 1)}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                  //onClick={this.onShowClick.bind(this, 1)} //wtih parameter
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group" style={{ color: "blue" }}>
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

//export name of component - if export default then no need to use {} while importing
export default Contact;
