import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        // spread op
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        // spread op - to get the initial state
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? contact === action.payload
            : contact
        )
      };
    //using map becoz we have an array n we want to loop through
    case "UPDATE_CONTACT":
      return {
        // spread op - to get the initial state
        ...state,
        //all value of name email and phone are in payload
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

//global state

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
  //     this.setState({
  //       contacts: res.data
  //     })
  //   );
  // }

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({
      contacts: res.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
