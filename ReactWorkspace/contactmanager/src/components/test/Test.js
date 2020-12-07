import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };

  //fetching data from fake API "jsonplaceholder"
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          id: data.id
        })
      );
  }

  render() {
    const { title, id } = this.state;
    return (
      <div>
        {/* placing fetched data from api in our page    */}
        <h1>{id}</h1>
        <p>{title}</p>
      </div>
    );
  }
}
export default Test;
